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
                <div v-for="prod in getProd" :key="prod.id" class="card shadow p-3 mb-5 bg-white rounded" style="width: 19rem">
                    <img class="card-img-top" src="../../../public/img/product1.jpg" alt="img_card">
                    <div class="card-body">
                        <h4 class="card-title">{{prod.name_product}}</h4>
                        <p class="card-text">
                         {{prod.desc}}
                        </p>
                        <div class="options d-flex flex-fill">
                            <select class="custom-select mr-1">
                                <option selected>Color</option>
                                <option value="1">Green</option>
                                <option value="2">Blue</option>
                                <option value="3">Red</option>
                            </select>
                            <select class="custom-select ml-1">
                                <option selected>Size</option>
                                <option value="1">41</option>
                                <option value="2">42</option>
                                <option value="3">43</option>
                            </select>
                        </div>
                        <div class="buy d-flex justify-content-between align-items-center">
                            <div class="price text-success"><h5 class="mt-4">$125</h5></div>
                             <a href="#" class="btn btn-primary mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>
    import {getProduct} from '../helpers/data/getData';
    import slide from './slide.vue'
    export default {
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