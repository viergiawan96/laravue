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
                        <select class="browser-default custom-select custom-select-md">
                            <option selected>Choose to delivery</option>
                            <option value="1">JNE</option>
                            <option value="2">Tiki</option>
                            <option value="3">Sicepat</option>
                        </select>
                        <select class="browser-default custom-select custom-select-md mt-2">
                            <option selected>Select a Province</option>
                            <option value="1">Bekasi</option>
                            <option value="2">Jakarta</option>
                            <option value="3">Yogyakarta</option>
                        </select>
                        <select :disabled="selectCity" class="browser-default custom-select custom-select-md mt-2">
                            <option selected>Select a City</option>
                            <option value="1">Bekasi</option>
                            <option value="2">Jakarta</option>
                            <option value="3">Yogyakarta</option>
                        </select>
                    </div>
                    <div class="mt-4">
                        <span><strong style="margin-right:45%; font-size: 1.2em;">Subtotal</strong>Rp {{ formatPrice(subTotalAmout) }}</span><br/>
                        <span><strong style="margin-right:44%; font-size: 1.2em;">Shipping</strong>Rp 20.000</span><br/>
                        <span><strong style="margin-right:54%; font-size: 1.2em;">Total</strong>Rp 10.000</span>
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
import {getCart} from '../helpers/data/getData';
import {putCart} from '../helpers/data/getData';
import {deleteCart} from '../helpers/data/getData';
import {getCourier} from '../helpers/data/getCourier';
import axios from 'axios';


export default {
    data() {
        return {
            putCarts: {
                id: '',
                quantity:''
            },
            subTotalAmout:0,
            selectCity:false
        }
    },
    methods: {
         formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        load(){
            
            const id = this.$store.getters.currentUser.id;
            getCart(id)
                    .then((res) => {
                        this.$store.commit('getCart', res.cart);
                        //jumlah total keranjang
                        let items = this.$store.getters.cart;
                        const cart = [];

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
        }
    },
    computed: {
        viewCart() {
            return this.$store.getters.cart;
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