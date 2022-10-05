import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 25,
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
    }
  },

  getters: {
    getCount: (state) => {
        return state.count;
    },
    getProductList: (state) => state.listData,
   // getCount: ({count}) => count,
},
  mutations: {
    increment (state) {
      state.count++
    },
    increaseCount(state,val){
        state.count+=val
    }
  },
  actions: {
    addValueCount({commit}, val) {
        commit('increaseCount', val);
    }
  }

})
export default store