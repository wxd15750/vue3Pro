<template>
    <el-scrollbar class="menu_list">
        <el-menu background-color="#001529" class="el-menu-vertical-demo" text-color="#fff">


            <template v-for="(item) in props.meunList" :key="item.path">
                <!-- 没有子路由 -->
                <template v-if="!item.children">

                    <el-menu-item v-if="!item.meta.hidden" :index="item.path">
                        <template #title>
                            <el-icon>
                                <component :is="item.meta.icon"></component>
                            </el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                    </el-menu-item>
                </template>
                <!-- 子路由只有一个 -->
                <template v-if="item.children && item.children.length == 1">
                    <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
                        <template #title>
                            <el-icon>
                                <component :is="item.children[0].meta.icon"></component>
                            </el-icon>
                            <span>{{ item.children[0].meta.title }}</span>
                        </template>
                    </el-menu-item>
                </template>

                <!-- 子路由有多个 -->
                <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
                    <template #title>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <Menu :meunList="item.children" />
                </el-sub-menu>
            </template>


        </el-menu>

    </el-scrollbar>
</template>
<script lang="ts" setup name='Menu'>

let props = defineProps({
    meunList: {
        type: Array,
        default: []
    }
})

</script>
<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped>
.menu_list {
    // height: calc(100vh - $nav_header_height);

    .el-menu {

        border-right: none;
    }

    p {
        height: 20px;
    }
}
</style>
