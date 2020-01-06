<template>
    <div class="container">
        <div class="row">
            <div class="col-8 border mt-2 mr-2 shadow-lg rounded">
                <div class="mt-2">
                    <table class="table">
                        <thead class="table-borderless">
                            <tr>
                                <th class="text-center" scope="col" colspan="2">Product</th>
                                <th scope="col">price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cart in viewCart" :key="cart.id">
                                <td>
                                    <img  class="img" :src="'img/asus.jpg'" alt="product-item">
                                </td>
                                <td class="align-middle">{{ cart.name_product }}</td>
                                <td class="align-middle">Rp {{ formatPrice(cart.price) }}</td>
                                <td class="align-middle">
                                    <input @change="qty(cart.id, $event)" id="quantity" min="1" type="number" :value="cart.quantity" class="form-control quantity-input">
                                </td>
                                <td id="myBtn" class="align-middle">Rp {{ formatPrice(cart.price * cart.quantity) }}</td>
                                <td class="align-middle">
                                    <button @click="deleteItem(cart.id)" type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md mt-2 border rounded total-cart">
                <h3 class="mt-4">Cart Total</h3>
                <div style="margin-top:5%;">
                    <div class="mt-2">
                        <select @change="methodShip()" v-model="ongkir.courier" class="browser-default custom-select custom-select-md">
                            <option disabled value="">Choose to delivery</option>
                            <option v-for="cr in viewCourier" :key="cr.id"  :value="cr.code">{{ cr.title }}</option>
                        </select>
                        <select @change="selectProvince($event)" class="browser-default custom-select custom-select-md mt-2">
                            <option disabled selected>Select a Province</option>
                            <option  v-for="pr in viewProvince" :key="pr.id" :value="pr.province_id">{{ pr.title }}</option>
                        </select>
                        <select @change="selectCities($event)" :disabled="selectCity" class="browser-default custom-select custom-select-md mt-2">
                            <option disabled selected>Select a City</option>
                            <option v-for="ct in viewcity" :key="ct.id" :value="ct.city_id">{{ ct.title }}</option>
                        </select>
                    </div>
                    <div class="mt-4">
                        <span><strong style="margin-right:45%; font-size: 1.2em;">Subtotal</strong>Rp {{ formatPrice(subTotalAmout) }}</span><br/>
                        <span><strong style="margin-right:44%; font-size: 1.2em;">Shipping</strong>Rp {{ formatPrice(amountShip) }}</span><br/>
                        <span><strong style="margin-right:54%; font-size: 1.2em;">Total</strong>Rp {{ formatPrice(subTotalAmout + amountShip) }}</span>
                    </div>
                    <div class="d-flex justify-content-center mt-3 mb-2">
                        <button type="button" class=" btn-change btn btn-lg btn-block">CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getCart, putCart, deleteCart} from '../helpers/data/getData';
import {getCourierProvince, getCity, getCost} from '../helpers/data/getOngkir';
import axios from 'axios';


export default {
    data() {
        return {
            putCarts: {
                id: '',
                quantity:''
            },
            subTotalAmout:0,
            selectCity:true,
            amountShip:0,
            ongkir: {
                courier: '',
                destination:''
            }
        }
    },
    methods: {
         formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        load(){
            getCourierProvince()
                .then((res) => {
                    this.$store.commit('getCourier', res.courier);
                    this.$store.commit('getProvince', res.province);
            })

            const id = this.$store.getters.currentUser.id;
            getCart(id)
                    .then((res) => {
                        this.$store.commit('getCart', res.cart);
                        //jumlah total keranjang
                        let items = this.$store.getters.cart;
                        let cart = [];

                        items.forEach(function(item){
                        let sum = item.price * item.quantity;
                            cart.push(sum);
                        });

                        const arr = cart.reduce((a, b) => a + b, 0)
                        this.subTotalAmout = arr;
                    })
        },
        qty(id, event) {
           // const dataCart = this.$store.getters.cart.find(cart => cart.id === id)
            this.putCarts.id = id;
            this.putCarts.quantity = event.target.value;

            putCart(this.$data.putCarts)
                    .then((res) => {
                        this.load();
                    })
                    .catch((err) => {
                        console,log(err);
                    })
        },
        deleteItem(id) {
            deleteCart(id)
                    .then((res) => {
                        this.load();
                    })
                    .catch((err) => {
                        console,log(err);
                    })
        },
        selectProvince(event) {
            this.selectCity =false;

            getCity(event.target.value)
                 .then((res) => {
                     this.$store.commit('getCity', res.city);
                 })
                 .catch((err) => {
                     console.log('koneksi bermasalah');
                 })

        },
        selectCities(event) {
            this.ongkir.destination = event.target.value;
            let couriers = this.ongkir.courier;

            if(couriers) {
                getCost(this.$data.ongkir)
                .then((res) => {
                    console.log(res)
                })
            }
        
        },
        methodShip(){
            let destinations = this.ongkir.destination;

            if(destinations) {
                getCost(this.$data.ongkir)
                .then((res) => {
                    console.log(res)
                })
            }
        }
    },
    computed: {
        viewCart() {
            return this.$store.getters.cart;
        },
        viewCourier() {
            return this.$store.getters.courier;
        },
        viewProvince() {
            return this.$store.getters.province;
        },
        viewcity() {
            return this.$store.getters.city;
        }
    },
    mounted() {
        this.load();
    }
}
</script>

<style>
    #quantity {
            text-align: center;
        }
    .quantity-input {
            text-align: center;
            width: 80px; 
        }
    .total-cart {
        background-color:whitesmoke;
    }
    .total-cart h3 {
        text-align: center;
        border-block-end-style: dashed;
        border-width: 1px;
        border-color: #808080;
    }
    .img{
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
    }
    .img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    .btn-change{
    background: lightseagreen;
    margin: 20px;
    float: left;
    border:0px;
    color:#fff;
    box-shadow: 0 0 1px #ccc;
    -webkit-transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    -webkit-box-shadow: 0px 0px 0 0 #31708f inset , 0px 0px 0 #31708f inset;
    }
    .btn-change:hover{
        -webkit-box-shadow: 0px 50px 0 0px #31708f inset , 0px -50px 0 0px #31708f inset; 
    }
</style>