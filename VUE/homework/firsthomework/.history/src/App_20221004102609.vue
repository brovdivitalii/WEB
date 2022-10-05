<template>
  <div>
    <product-list :product-list-data="listData" />
  </div>
</template>

<script>
import ProductList from "@/components/index.vue";

export default {
  name: "App",
  components: {
    ProductList,
  },
  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            "https://ireland.apollo.olxcdn.com/v1/files/5a36wul5kyg31-UA/image;s=644x461",
          title: "Crosovki modnie 36 size super x model versions",
          description: "kyiv",
          value: 100,
        },
        {
          id: 2,
          imgSrc:
            "https://ireland.apollo.olxcdn.com/v1/files/zhyngkdq8f3f1-UA/image;s=644x461",
          title: "test",
          description: "home",
          value: 340,
        },
        {
          id: 3,
          imgSrc:
            "https://ireland.apollo.olxcdn.com/v1/files/u0verscwtw7j2-UA/image;s=644x461",
          title: "lol",
          description: "Obuxiv",
          value: 350,
        },
        {
          id: 4,
          imgSrc:
            "https://ireland.apollo.olxcdn.com/v1/files/u0verscwtw7j2-UA/image;s=644x461",
          title: "lol",
          description: "Obuxiv",
          value: 350,
        },
        {
          id: 5,
          imgSrc:
            "https://ireland.apollo.olxcdn.com/v1/files/u0verscwtw7j2-UA/image;s=644x461",
          title: "lol",
          description: "Obuxiv",
          value: 350,
        },
      ],
      
    };
  },
};
</script>

<style>
  @import '/assets/styles';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
