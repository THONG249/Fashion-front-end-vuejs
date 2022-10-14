<template>
  <div>
    <!-- <Header />
  <nav>
    <router-link to="/" class="header-link">Trang chủ</router-link> 
    <router-link to="/about" class="header-link">Sản Phẩm</router-link>
  </nav>
 <router-view/>  -->
    <router-view> </router-view> 
  </div>
  <!-- <login v-if="true false" @UpdateData=""/> -->
</template>
<script>
// import Header from './components/Header.vue'
// import Login from '../views/single-page/Login';
export default {
  components:{
    // Header,
    // Login
  },
}
</script>
<style>
.header-link{
text-decoration: none;
list-style: none;
padding: 10px 20px;
}
nav{
  padding: 20px 22px;
}
</style>
