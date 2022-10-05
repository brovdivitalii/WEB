import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 25,
      
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