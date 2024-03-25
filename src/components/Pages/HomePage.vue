<template>
  <div class="container">
   
    <div class="content-text mt-5">
      <h2 class="text-center">News Live</h2>
      <h2> {{ name }}</h2>
      <p class="text-center">Total data <span class="badge text-bg-warnimg">{{ news.length }}</span></p>
    </div>
    <div class="row">
      <div class="col-xl-6 col-md-6 col-sm-10 col-12">
        <input type="text" placeholder="Search..." class="form-control" v-model="search" />
      </div>
      <div class="col-xl-6 col-md-6 col-sm-10 col-12">
        <select class="form-control">
          <option>Select Country</option>
          <option>😎 IND</option>
          <option>😁 USA</option>
        </select>
      </div>
    </div>

    <div class="row mt-5 fullDetails">
      <div class="col-xl-4 col-sm-6 col-12 " v-for="(item, index) in Visiblenews" :key="index">
        <div v-if="!item">
          <h1>Podaa</h1>
        </div>
        <div class="card" v-if="item">
          <img :src="item.urlToImage" alt="article.title" class="image" />
          <div class="card-body">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
            <a class="btn btn-primary" :href="item.url" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  <div class="row mt-4" v-if="this.Visiblenews.length<=filteredNews.length" >
      <div class="col-12 text-center">
        <button class="btn btn-danger" @click="loadMore">Load More</button>
      </div>
    </div>
  
</template>

<script>
export default {
  props:['name'],
  data() {
    return {
      news: [],
      search: '',
      visiblecount:6,
    }
  },
  mounted() {
    fetch('http://localhost:3000/articles').then((res) => {
      return res.json()
    }).then((data) => this.news = data)
      .catch(console.error('not loaded'))
  },
  computed:{
      filteredNews(){
        console.log("excuted 1 st");
        return this.news.filter(news=>{
          return news.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      Totalcontent(){
        return this.filteredNews.filter(news=>news.urlToImage)
        

      },
      Visiblenews(){
        return this.Totalcontent.slice(0,this.visiblecount);
        

      }
     


    },
    methods:{
      loadMore(){
        this.visiblecount+=6;
        console.log(this.Visiblenews.length);
        console.log(this.filteredNews.length)
      }

    }
   
    

      

    
  }

 
</script>

 <style>
.image {
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0px 0px;
}

.fullDetails {
  row-gap: 24px;
}

.card {
  margin-bottom: 20px;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
}

.card-body {
  position: relative;

}

.card-body a {
  position: absolute;
  bottom: 8px;
}
</style> 
