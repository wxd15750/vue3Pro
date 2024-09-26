<template>
    <div class="tabbar">
        <div class="left">
            <el-icon class="btns" @click="changeMenu">
                <component :is="settings.fload ? 'Expand' : 'Fold'"></component>
            </el-icon>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title">{{
                    item.meta.title
                }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <!-- <el-button size="small" icon="Refresh" circle></el-button> -->
            <el-button size="small" icon="FullScreen" circle @click="toFull"></el-button>
            <el-button size="small" icon="Setting" circle></el-button>
            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts" setup name='Tabber'>
import useSettingStore from '../../store/setting'
let settings = useSettingStore()
import { useRoute } from 'vue-router';
let $route = useRoute()
// 折叠
const changeMenu = () => {
    settings.fload = !settings.fload
}
// 全屏
const toFull = () => {
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }

}
</script>

<style lang="scss" scoped>
.tabbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;

    .left {
        display: flex;
        margin-left: 10px;

        .btns {
            margin-right: 10px;
        }
    }

    .right {
        display: flex;
        align-items: center;
        margin-right: 10px;

        .avatar {
            width: 24px;
            height: 24px;
            margin: 0 10px;
        }
    }
}
</style>
