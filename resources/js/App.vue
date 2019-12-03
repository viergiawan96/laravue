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
                        <a class="nav-link"><router-link to="/user">User</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Register</a>
                    </li>          
                </ul>
            </div>
        </nav>
      <main class="py-5">
            <router-view/>
        </main>
  </div>
</template>


<style scoped>
.nav1 a{
  font-size: 16px;
  color: white;
}
</style>