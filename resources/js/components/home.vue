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
            getClr(event) {
                this.color = event.target.value;
            },
            getSz(event){
                this.size = event.target.value;
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
            }
        },
        computed: {
            getProd() {
                return this.$store.getters.product;
            }
        },
        mounted() {
            this.load();
            console.log(this.$store.getters.getCart);
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