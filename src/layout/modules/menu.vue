<template>


    <template v-for="(item) in props.meunList" :key="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">

            <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="toTarget">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>

                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 子路由只有一个 -->
        <template v-if="item.children && item.children.length == 1">
            <el-menu-item @click="toTarget" v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>

                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!-- 子路由有多个 -->
        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <Menu :meunList="item.children" />
        </el-sub-menu>
    </template>



</template>
<script lang="ts" setup name='Menu'>
import { useRouter } from 'vue-router'
import useSettingStore from '../../store/setting'
let settings = useSettingStore()
let $router = useRouter()
let props = defineProps({
    meunList: {
        type: Array,
        default: []
    }
})
const toTarget = (vc: any) => {
    $router.push(vc.index)
}

</script>
<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style lang="scss" scoped>
.menu_list {
    width: $menu_aside_width;



    p {
        height: 20px;
    }

    &.fold {
        width: $menu_asidemin_width;
    }
}
</style>
