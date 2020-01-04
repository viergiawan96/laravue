<template>
    <div class="container">
        <div>
            <slide/>
        </div>
        <div class="row container">
            <div class="col" id="sidebar">
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
                        <transition-group name="bounce" mode="out-in" class="cas">    
                            <div v-for="prod in getProd" :key="prod.id" class="card shadow p-3 mr-2 mb-2 bg-white rounded" style="width: 19rem;">
                                    <div style="height: 200px; margin-top: 10px;">
                                        <img class="card-img-top" :src="'img/'+prod.images" alt="img_card">
                                    </div>
                                <div class="card-body">
                                    <h4 class="card-title">{{prod.name_product}}</h4>
                                    <p class="card-text">
                                    {{prod.desc}}
                                    </p>
                                    <div class="price text-primary"><span>harga :</span> <span>Rp.{{ prod.price }}</span></div>
                                    <div class="price text-primary"><span>Stok :<span>{{ prod.stok }}</span></span></div>
                                    <form @submit.prevent="add_cart(prod)">
                                        <div class="buy d-flex justify-content-center align-items-center">
                                            <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                        </div>
                                    </form>
                                </div>   
                            </div>
                        </transition-group>
                    </div>
                </div>
            </div> 
        </div>
        <modal 
              name="login"
              transition="nice-modal-fade"
              :width="350"
              :min-height="200"
              :delay="90"
              :adaptive="true">
            <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalLabel">Login</h4>
                  <button type="button" @click.prevent="hideLogin" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="authenticate">
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class='fas fa-envelope'></i></span>
                          </div>
                          <input v-model="form.email" type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                      </div>
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon2"><i class="fas fa-key"></i></span>
                          </div>
                          <input v-model="form.password" type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                      </div>
                      <button type="submit" class="btn btn-primary">Login</button>
                      <button type="button" class="btn btn-danger" @click.prevent="hideLogin">Close</button>
                  </form>
                </div>
            </div>
        </modal>
    </div>
</template>
   
<script>
    import {getProduct} from '../helpers/data/getData';
    import {getStok} from '../helpers/data/getData';
    import slide from './slide.vue';
    import {login} from '../helpers/auth';
    import {pushCart} from '../helpers/data/getData';
    

    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                carts: {
                    id_product:'',
                    id_user:''
                }
            }
        },
        components: {
            slide 
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("prosesSuccess", res);
                        //this.$router.push({path: '/about'});
                        this.$modal.hide('login');
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});
                        alert(this.$store.getters.authError);
                    });
            },
            load(){
                getProduct()
                    .then((res) =>{
                        this.$store.commit('getProduct', res);
                    })
                    .catch((err) =>{
                        console.log(err);
                    })
            },
            showLogin() {
                    this.$modal.show('login');
            },
            hideLogin() {
                    this.$modal.hide('login');
            },
            add_cart(prod){
                var getId = 'id='+prod.id;
                this.carts.id_product = prod.id;
                getStok(getId)
                        .then((res) => {
                            var getUsr = this.$store.getters.isLoggedIn;
                            if(getUsr) {
                            this.carts.id_user = this.$store.getters.currentUser.id;
                                pushCart(this.$data.carts)
                                    .then((res) => {

                                        if(res === 'false'){
                                            this.$swal.fire(
                                                 prod.name_product,
                                                'Berhasil di masukan keranjang',
                                                'success'
                                            );
                                        } else {
                                            this.$swal.fire(
                                                 prod.name_product,
                                                'Berhasil di tambahkan keranjang',
                                                'success'
                                            );
                                        }
                                    })
                                    .catch((err) => {
                                        console.log('koneksi bermasalah');
                                    })
                            }
                            else {
                                console.log(getUsr);
                                this.showLogin();
                            }
                            
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
    .cas {
    display:grid;
    grid-template-columns: repeat(3, auto);
}
@media only screen and (max-width: 500px) {
    .cas {
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
}
</style>