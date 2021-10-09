<template>
<div class="container">
    <el-breadcrumb separator="/">
        <template v-for="(h, index) in header">
            <el-breadcrumb-item :to="{ path: '/' }">{{h}}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</div>
    
</template>
<script lang="ts">
    export default {
        name: 'Breadcrumb',
        props: {
            header: {
                type: Array,
                default: []
            }
        }

    }
</script>
<style scoped>
    .container{
        width: 100%;
        height: 60px;
        padding: 20px 16px;
        line-height: 22px;
        box-sizing: border-box;
        box-shadow: 0 2px 4px 0 rgb(175 186 200 / 17%);
        background-color: #fff;
    }
</style>