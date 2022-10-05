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
        {{ priceToShow }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    imgSrc: {
      type: String,
      default:
        "https://ireland.apollo.olxcdn.com/v1/files/v5d96k8meds61-UA/image;s=644x461",
    },
    title: {
      type: String,
      default: "No title",
    },
    description: {
      type: String,
      default: "No description",
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    priceToShow() {
      return `${this.value} грн.`;
    },
  },
};
</script>

<style>
.container {
  background-color: aquamarine;
  margin: 10px;
}
.card-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 300px;

  padding: 10px;
}
.card-title {
  font-size: 30px;
  color: black;
}
.card-description {
  font-size: 20px;
  color: gray;
}
.image-block {
  padding: 5px;
}
.image-block img {
  max-width: 120px;
  height: auto;
}
</style>
