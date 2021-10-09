<template>
        <Breadcrumb :header="header"></Breadcrumb>
        <div class="contaienr">
            
        
        </div>
        
</template>
<script lang="ts">
    import Breadcrumb from '@/components/Breadcrumb.vue' 
    export default {
        components: {
            Breadcrumb
        },
        setup() {
            const header: string[] = ['仪表板', '员工管理系统'];
            return {header}
        }
    }
</script>

<style scoped>
    .contaienr{
        padding: 20px 16px;
    }
</style>