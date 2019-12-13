<template>
    <div id="app">
            <nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm">
                <div class="container">
                    <a class="navbar-brand">
                        <Label>Laravel VueJs</Label>
                    </a>
                    <ul class="navbar-nav ml-auto nav1">
                        <li class="nav-item">
                            <a class="nav-link"><router-link to="/">Home</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><router-link to="/about">About</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a v-if="!isLoggedIn" class="nav-link" href="#" @click.prevent="showLogin">Login</a>
                            <a v-if="isLoggedIn" class="nav-link" href="#" @click.prevent="logout()">Logout</a>
                        </li>
                        <li class="nav-item">
                            <a v-show="!isLoggedIn" class="nav-link" href="#" @click.prevent="showRegis">Register</a>
                        </li>          
                    </ul>
                </div>
            </nav>
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
                      <div class="form-group row" v-if="authError">
                            <p class="error">
                                {{ authError }}
                            </p>
                      </div>
                  </form>
                </div>
            </div>
          </modal>


          <modal 
              name="register"
              transition="nice-modal-fade"
              :width="350"
              :min-height="200"
              :delay="90"
              :adaptive="true">
            <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalLabel">Create Account</h4>
                  <button type="button" @click.prevent="hideRegis" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="register">
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class='fas fa-user-alt'></i></span>
                          </div>
                          <input required v-model="forms.name" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">

                      </div>
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class='fas fa-envelope'></i></span>
                          </div>
                          <input required v-model="forms.email" type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                      </div>
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon2"><i class="fas fa-key"></i></span>
                          </div>
                          <input required v-model="forms.password" type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                      </div>
                      <button type="submit" class="btn btn-primary">Create Account</button>
                      <button type="button" class="btn btn-danger" @click.prevent="hideRegis">Close</button>
                  </form>
                </div>
            </div>
          </modal>

          <main class="py-1">
              <router-view/>
          </main>
    </div>
</template>

<script>
import {login} from './helpers/auth';
import {routes} from './routes';
import {register} from './helpers/auth';

export default {
  name: 'main-app',
  data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                forms: {
                    name:'',
                    email: '',
                    password: ''
                },
                error: null
            };
        },
  methods :{
      showLogin(){
        this.$modal.show('login');
      },
      hideLogin(){
        this.$modal.hide('login');
      },
      showRegis(){
        this.$modal.show('register');
      },
      hideRegis(){
        this.RegErr = [];
        this.$modal.hide('register');
      },
      authenticate() {
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("prosesSuccess", res);
                        this.$router.push({path: '/about'});
                        this.$modal.hide('login');
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});
                    });
      },
      register() {
          this.$store.dispatch('register');
          register(this.$data.forms)
                    .then((res) => {
                        this.$store.commit("prosesSuccess", res);
                        this.$router.push({path: '/about'});
                        this.$modal.hide('register');
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        this.$modal.hide('register');
                    });
      },
      logout() {
        this.$store.commit('logout');
        this.$router.go();
      }
  },
  computed: {
      authError() {
        return this.$store.getters.authError;
      },
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
  }
}
</script>

<style scoped>
    .error {
        text-align: center;
        color: red;
    }
    .nav1 .nav-item a{
        font-size: 16px;
        color: white;
        font-family: 'Alata', sans-serif;
        text-decoration: none;
    }
    .nav1 a.router-link-exact-active{
        color: #00E676;
    }
    .nav1 .nav-item a:hover {
        color: #00E676;
    }
    .py-5{
        font-family: 'Cabin', sans-serif;
    }
</style>