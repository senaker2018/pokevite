<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>

   <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <img src="\src\assets\imgs\pokeball.png" style="width: 2em; height: 2em; margin-right: 5px;" alt="">
      <router-link  class="navbar-brand text-white" to="home">Pokevite</router-link>  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white-50 link rounded-2" aria-current="page" to="home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white-50 link rounded-2" to="about">Sobre</router-link>
          </li>      
        </ul>
      </div>
    </div>
  </nav>
  <div class="main">
    <router-view />
  </div>
 

  <footer class="bg-primary text-white">
      <div class="footer">
      By Isaias de Lima Sena - {{ new Date().getFullYear() }}
      </div>
  </footer>
    

</template>

<style scoped>
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.link:hover {
 background-color: #C0B2FA;
 
}
</style>
