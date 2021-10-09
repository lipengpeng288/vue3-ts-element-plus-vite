<template>
    <div class="hello">
        <h1>{{getAge}}</h1>
        <h1>{{ state }}</h1>
        <h2>{{msg}}</h2>
        <h3>{{num}}</h3>
        <el-button @click="add">add</el-button>
        <el-button @click="addCount">addCount</el-button>

    </div>
</template>

<script lang="ts">
import  axios  from 'axios'
import { ref } from "@vue/reactivity";
import store from "@/store";
import { mapState } from "vuex";


export default  {
    name: 'HelloWorld',
    // msg!: string; 

    components: {},
    props: {
        msg: {
            default: '123',
        },
    },
    setup() {
        let state = ref(123);
        // let num: number = store.getters.getCount;

        const add = ():void => {
            state.value++;
        }
        const addCount = () => {
            store.commit('increment')
            // num = store.getters.getCount;
            // console.log(num);
        }
        return {state, add, addCount}
    },
    computed:{
        getAge() {
            return 456;
        },
        ...mapState({
            num: 'count'
         })
    },
    mounted() {
        console.log(34567899)
    },
    watch: {
        state:()=> {
            console.log('asdfh');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
