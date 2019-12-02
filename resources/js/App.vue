<template>
  <div id="app">
      <nav class="nav">
          <div class="container">
              <div class="logo">
                  <img alt="Vue logo" src="@/assets/img/logo.png">
              </div>
              <div id="mainListDiv" class="main_list">
                  <ul class="navlinks">
                      <li><a><router-link to="/">Home</router-link></a></li>
                      <li><a><router-link to="/about">About</router-link></a></li>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Register</a></li>
                  </ul>
              </div>
              <span class="navTrigger">
                  <i></i>
                  <i></i>
                  <i></i>
              </span>
          </div>
      </nav>
      <router-view/>
  </div>
</template>

<style scoped>
.main_list a.router-link-exact-active {
  color: #00E676;
}
.nav {
  z-index: 999;
}
</style>
