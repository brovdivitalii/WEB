<template>
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
import ProductCard from './product.vue'
export default {
name:'ProductList',
components:{
    ProductCard
},
props:{
    productListData:{
        type: Array,
        default: () => []
    }
}
}
</script>

<style lang="css" scoped>
.list-container{
  display: flex;
  justify-content: center;

}
</style>