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
                    <li class="nav-item"><a class="nav-link text-truncate" @click="fill(0)" type="submit"> <span class="d-none d-sm-inline">All</span></a></li>
                    <li class="nav-item"><a class="nav-link text-truncate" @click="fill(1)" type="submit"> <span class="d-none d-sm-inline">Laptop</span></a></li>
                    <li class="nav-item"><a class="nav-link text-truncate" @click="fill(2)" type="submit"> <span class="d-none d-sm-inline">Handphone</span></a></li>
                </ul>
            </div>
            <div class="col-10">
                <div class="container">
                    <div class="row">     
                        <transition name="bounce" mode="out-in" v-for="we in getProd" :key="we.id">    
                            <div v-for="prod in getProd" :key="prod.id" class="card shadow p-3 mr-2 mb-2 bg-white rounded" style="width: 19rem;">
                                <div data-category="prod.type_product">
                                <img class="card-img-top" src="../../../public/img/asus.jpg" alt="img_card">
                                <div class="card-body">
                                    <h4 class="card-title">{{prod.name_product}}</h4>
                                    <p class="card-text">
                                    {{prod.desc}}
                                    </p>
                                    <form @submit.prevent="add_cart(prod)">
                                        <div class="buy d-flex justify-content-between align-items-center">
                                            <div class="price text-success"><h5 class="mt-4">Rp.{{ prod.price }}</h5></div>
                                            <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                        </div>
                                    </form>
                                </div>   
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
   
<script>
    import {getProduct} from '../helpers/data/getData';
    import {getStok} from '../helpers/data/getData';
    import slide from './slide.vue';
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
            },
            add_cart(prod){
                var getId = 'id='+prod.id;
                getStok(getId)
                        .then((res) => {
                            var getUsr = this.$store.getters.isLoggedIn;
                            if(!getUsr) {
                                console.log(this.$store.getters.isLoggedIn);
                                this.$store.commit("getCart", prod);
                            }
                            else {
                                console.log(this.$store.getters.cart);
                                this.$store.commit("getCart", prod);
                            }
                            
                        })
                        .catch((err) => {
                            alert(err);
                        })
            },
            fill(id){
                this.$store.commit("getFill", id);
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
    .bounce-enter-active {
    animation: bounce-in .5s;
    }
    .bounce-leave-active {
    animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
</style>