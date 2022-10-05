import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },

  getters: {
    getCount: state => {
        return state.value;
    },
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }

})
export default store