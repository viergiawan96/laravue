<template>
    <div class="container">
        <div>
            <slide/>
        </div>
        <div class="row container">
            <div class="col " id="sidebar">
                <ul class="nav">
                    <li class="nav-item border-bottom border-primary">
                        <h5 class="font-weight-bold"> Kategori </h5>
                    </li>
                    <li class="nav-item"><a class="nav-link text-truncate" href="#"> <span class="d-none d-sm-inline">Women</span></a></li>
                    <li class="nav-item"><a class="nav-link text-truncate" href="#"> <span class="d-none d-sm-inline">Men</span></a></li>
                </ul>
            </div>
            <div class="col-10">
                <div class="container">
                    <div class="row">        
                        <div v-for="prod in getProd" :key="prod.id" class="card shadow p-3 mr-2 bg-white rounded" style="width: 19rem;">
                            <img class="card-img-top" src="../../../public/img/product1.jpg" alt="img_card">
                            <div class="card-body">
                                <h4 class="card-title">{{prod.name_product}}</h4>
                                <p class="card-text">
                                {{prod.desc}}
                                </p>
                                <form @submit.prevent="add_cart(prod.id)">
                                    <div class="options d-flex flex-fill">
                                        <select v-on:change="getClr($event)" name="color" class="custom-select mr-1">
                                            <option value="selected">Color</option>
                                            <option value="red">Red</option>
                                            <option value="blue">Blue</option>
                                            <option value="black">Black</option>
                                            <option value="white">White</option>
                                        </select>
                                        <select v-on:change="getSz($event)" name="size" class="custom-select ml-1">
                                            <option value="selected">Size</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </div>
                                    <div class="buy d-flex justify-content-between align-items-center">
                                        <div class="price text-success"><h5 class="mt-4">Rp.{{ prod.price }}</h5></div>
                                        <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                    </div>
                                </form>
                            </div>   
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
   
<script>
    import {getProduct} from '../helpers/data/getData';
    import slide from './slide.vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                color :'',
                size : ''
            }
        },
        components: {
            slide 
        },
        methods: {
            load(){
                getProduct()
                    .then((res) =>{
                        this.$store.commit('getProduct', res);
                    })
                    .catch((err) =>{
                        console.log(err);
                    })
            },
            getClr(event) {
                this.color = event.target.value;
            },
            getSz(event){
                this.size = event.target.value;
            },
            add_cart(id){
                axios.post('api/GetProduct',{
                    id : id,
                    color : this.color,
                    size : this.size
                })
                .then(function (response) {
                    console.log(response)
                }) 
            }
        },
        computed: {
            getProd() {
                return this.$store.getters.product;
            }
        },
        mounted() {
            this.load();
        }
    }
</script>

<style scoped>
    .row {
        margin-top: 5%;
        font-family: 'Cabin', sans-serif;
    }
    #sidebar ul li{
        text-align: center;
        width: 100%;
    }
</style>