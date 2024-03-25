<template>
 
    <TheNavigation />

  <div class="container">
    <router-view :user="user" :about="about" :name="name"></router-view>
    
  </div>
 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
 


</template>

<script>

// import HomePage from './components/HomePage.vue';
import TheNavigation from './components/TheNavigation.vue'
// import FooterView from './components/FooterView.vue';

export default {
  data(){
    return{
      user: {
        name: "John Doe",
        age: 30
      },
      about:{
        position:'Buisness man',
      }
    }

  },
  name: 'App',
  components: {
    TheNavigation,
    
   
  }
}
</script>

<style>

</style>
