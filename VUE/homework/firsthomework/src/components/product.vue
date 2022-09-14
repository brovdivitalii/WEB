<template>
  <div class="container">
    <div class="card-container">
      <div class="image-block"><img :src="imgSrc" /></div>
      <div class="card-title">
        {{ title }}
      </div>
      <div class="card-description">
        {{ description }}
      </div>
      <div class="card-value">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props:{
    imgSrc:{
      type: String,
      default: 'https://ireland.apollo.olxcdn.com/v1/files/v5d96k8meds61-UA/image;s=644x461'
    },
    title:{
      type: String,
      default: 'No title'
    },
     description: {
      type: String,
      default: 'No description',
    },
    value:{
      type: Number,
      default: 0,
    }
  },
   computed: {
    priceToShow() {
      return `${this.value} грн.`
    },
  },

}
</script>

<style>
.card-container{
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content:
}
.image-block{
  padding: 10px;
  margin: 10px;
}
.image-block img{
  width: 200px;
}
</style>