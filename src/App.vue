<template>
  <main class="bg-light">
    <header class="container">
      <div class="row aling-items-center justify-content-center py-4 text-info">
        <router-link to="/" class="w-auto">Login</router-link> |
        <router-link to="/register" class="w-auto">Register</router-link>
      </div>
    </header>
    <router-view />
  </main>
</template>

<script>
export default {
  components: {
    
  }
}
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "./css/mainstyle.css";

a, a:hover, a:active, a:visited{
  text-decoration: none;
}

main {
  min-height: 100vh;
}
</style>
