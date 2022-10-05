<template>
    <h2> {{getCount}} </h2>
    <button @click="onClick">add 1 to count</button>
    <div class="list-container">
      <product-card
        v-for="item in productListData"
        :key="item.id"
        :img-src="item.imgSrc"
        :title="item.title"
        :description="item.description"
        :value="item.value"
      />
    </div>
  </template>
  
  <script>
  import ProductCard from "./product.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "ProductList",
    components: {
      ProductCard,
    },
    props: {
      productListData: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      ...mapGetters(['getCount', 'getProductList'])
     },
     methods:{
      ...mapActions(['addValueCount']),
      onClick(){
        this.addValueCount(1)
      }
     }
  };
  </script>
  
  <style lang="css" scoped>
  .list-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  </style>
  