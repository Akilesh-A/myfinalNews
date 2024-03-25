<template>
    <div>
      <nav :class="{ 'navbar': true, 'navbar-expand-lg': true, 'border': true, 'border-info': true, 'mt-3': false, 'sticky-top': isSticky }">
        <div class="container">
          <a class="navbar-brand navbarLogo" href="/"><img src="../assets/logo.png" alt="" width="80px"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> 
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navbarCollapse">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/aboutus" class="nav-link">About us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sportscompo" class="nav-link">Sports</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/buisnesscompo" class="nav-link">Buisness</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSticky: false // Initially navbar is not sticky
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Check if the user has scrolled beyond a certain point, then make the navbar sticky
        // console.log(window.screenY);
        this.isSticky = window.scrollY > 77; // Adjust 100 as needed based on your design
      }
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
  </script>
  
  <style scoped>
  .totalNav {
    transition: top 0.3s; /* Smooth transition when navbar becomes sticky */
  }
  
  .navbarLogo {
    padding-top: 20px;
    font-size: 30px;
  }
  
  #navbarNav {
    justify-content: right;
    padding-top: 20px;
  }
  
  .navbarCollapse {
    gap: 60px;
  }
  
 
  .sticky-top {
    position: fixed;
    top: 10;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
  }
  @media (max-width: 980px) {
    .navbar-collapse {
        /* Styles for smaller screens */
        display: flex;
    flex-direction: column;
    padding-left: 200px;
    margin-bottom: 0;
 
    list-style: none;
 
    margin-top: -132px;
    }
    .navbarCollapse[data-v-128f56e5]{
      gap: 9px;
    }

    .nav-item {
        margin-bottom: 5px;
       /* Add some spacing between nav items */
    }
    
}
  </style>
  