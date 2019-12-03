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
                          <a class="nav-link" href="#" @click.prevent="showLogin">Login</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#" @click.prevent="showRegis">Register</a>
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
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon2">@</span>
                    </div>
                    <input type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                </div>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Login</button>
              </div>
          </div>
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