import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 222
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    },
    mutations: {
        increment(state) {
            console.log(111111);
            state.count++;
            console.log(state.count);
        }
    },
    actions: {
    },
    modules: {
        
    }
})
