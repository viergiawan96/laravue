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
                          <a class="nav-link"><router-link to="/about">User</router-link></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#" @click.prevent="showLogin">Login</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#" @click.prevent="showRegis">Register</a>
                      </li>          
                  </ul>
              </div>
          </nav>
          <modal name="login" :width="200">
              Login
          </modal>
          <modal name="registrasi">
              Register
          </modal>

        <main class="py-5">
              <router-view/>
          </main>
    </div>
</template>

<script>
export default {
  name: 'main-app',
  methods :{
    showLogin(){
      this.$modal.show('login');
    },
    hideLogin(){
      this.$modal.hide('Login');
    },
    showRegis(){
      this.$modal.show('registrasi');
    },
    hideRegis(){
      this.$modal.hide('registrasi');
    }
  }
}
</script>

<style scoped>
  .nav1 .nav-item a{
    font-size: 16px;
    color: white;
  }
</style>