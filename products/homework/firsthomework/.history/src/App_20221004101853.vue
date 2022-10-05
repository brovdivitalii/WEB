<template>
  <div>
    <product-list :product-list-data="listData"/>
  </div>
</template>

<script>
import ProductList from './components/product.vue'

export default {
 name:'App',
 components:{
  ProductList,
    },
    data(){
      return{
        listData:[{
          id: 1,
          imgSrc: 'https://ireland.apollo.olxcdn.com/v1/files/bux6msyvxo6t3-UA/image;s=644x461',
          title: "Crosovki",
          description:"Obuxiv",
          value: 100
        },
        {
          id: 2,
          imgSrc: 'https://ireland.apollo.olxcdn.com/v1/files/bux6msyvxo6t3-UA/image;s=644x461',
          title: "lol",
          description:"Obuxiv",
          value: 200
        }

        ]
      }
    }  
  }

</script>

<style lang="scss">
  @import './assets/styles';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
