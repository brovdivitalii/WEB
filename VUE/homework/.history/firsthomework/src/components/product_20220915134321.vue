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
      <div class="card-value-and-icon">
        <div class="card-value">
          {{ priceToShow }}
        </div>
        <div class="card-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/4689/4689844.png" />
        </div>
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
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 200px;
  height: auto;
  padding: 10px;
}
.card-title {
  display: block;
  font-size: 20px;
  color: black;
  cursor: pointer;
}
.card-title:hover {
  background-color: rgb(21, 21, 21);
  color: white;
}
.card-description {
  font-size: 20px;
  color: gray;

  text-align: left;
}
.card-value-and-icon {
  display: flex;
  justify-content: space-between;
}
.card-value {
  align-self: center;
}
.card-icon {
  cursor: pointer;
}
.card-icon:hover {
  background-color: rgb(255, 238, 127);
}
.card-icon img {
  width: 30px;
}
.image-block {
  padding: 5px;
  overflow: hidden;
}
.image-block img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
</style>
