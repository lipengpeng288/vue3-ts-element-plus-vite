<template>
<div class="app">
    <div class="header">
        <div class="header-title"> 
            <i class="el-icon-s-home"></i>
            <span style="margin-left: 8px;">员工信息管理系统</span>
        </div>
    </div>
    <div class="home-content">
        <el-menu class="menu" default-active="2" :router="true">
            <template v-for="(c, index) in config" :key="index">
                <template v-if="c.type == 'group'">
                    <el-submenu>
                        <template #title :index="'/about'">
                            <i :class="c.icon"></i>
                            <span>{{c.name}}</span>
                        </template>
                        <template v-if="c.children && c.children.length > 0">
                            <template v-for="(child, j) in c.children" :key="j">
                                <el-menu-item index="1-1">{{child.name}}</el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="c.link">
                        <i :class="c.icon"></i>
                        <template #title>{{c.name}}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
        <div style="width: calc(100%-240px); height: 100%; overflow: auto;">
            <router-view />
        </div>
           
    </div>
</div>
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div> -->
    
</template>
<script lang="ts">
import Config from '@/config/page-router';
export default {
    setup() {
        const config = Config;
        return {
            config
        }
    },
    methods: {
        goHome():void {
            console.log('返回到page页面');
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        border: 1px solid #fff;
        box-shadow: 0 2px 4px 0 rgb(175 186 200 / 17%);
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 500;
        line-height: 60px;
        .header-title{
            height: 60px;
            line-height: 60px;
            padding: 0 16px;
        }
       
    }
    .home-content{
        min-width: 100%;
        height: 100%;
        position: relative;
        top: 58px;
        left: 0;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 60px);
        .menu{
            min-width: 240px;
            height: 100%;
            text-align: center;
        }
    }
</style>
