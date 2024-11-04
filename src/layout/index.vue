<template>
    <div class="layout">
        <!-- 菜单栏 -->
        <div class="layout_aside" :class="{ fold: settings.fload ? true : false }">
            <!-- LOGO -->
            <Logo />
            <!-- 菜单栏 -->
            <el-scrollbar class="menu_list" :class="{ fold: settings.fload ? true : false }">
                <el-menu :collapse="settings.fload ? true : false" background-color="#001529"
                    class="el-menu-vertical-demo" text-color="#fff">

                    <Menu :meunList="userStore.menuRoutes" />
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout_tabbar" :class="{ fold: settings.fload ? true : false }">
            <Tabber />
            <!-- <div class="footer">
                <Footer />
            </div> -->
        </div>
        <el-scrollbar class="layout_content" :class="{ fold: settings.fload ? true : false }">
            <div>

                <el-card>
                    <Content />
                </el-card>

            </div>
        </el-scrollbar>
    </div>

</template>
<script lang="ts" setup name='Layouts'>
import Logo from './modules/logo.vue'
import Menu from './modules/menu.vue'
import Tabber from './modules/tabber.vue'
import Content from './modules/content.vue'
// import Footer from './modules/footer.vue'
// 获取仓库的路由数据
import useUserStore from '../store/userInfo'
import useSettingStore from '../store/setting'
let settings = useSettingStore()
let userStore = useUserStore()

</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .layout_aside {
        height: 100%;
        width: $menu_aside_width;
        background-color: $menu_aside_background;
        transition: all .3s;
        box-sizing: border-box;
        overflow: hidden;

        .el-scrollbar {
            height: calc(100% - $nav_header_height);
        }

        .el-menu {
            border-right: none;
        }

        &.fold {
            width: $menu_asidemin_width;
        }
    }

    .layout_tabbar {
        position: fixed;
        top: 0;
        left: $menu_aside_width;
        width: calc(100% - $menu_aside_width);
        height: $nav_header_height;
        background-color: #ffffff;
        border-bottom: 1px solid #f0eeee;
        transition: all .3s;

        &.fold {
            width: calc(100% - $menu_asidemin_width);
            left: $menu_asidemin_width;
        }
    }

    .layout_content {
        position: absolute;
        box-sizing: border-box;
        top: $nav_header_height;
        left: $menu_aside_width;
        width: calc(100% - $menu_aside_width);
        height: calc(100% - $nav_header_height);
        padding: 10px;
        overflow: auto;
        transition: all .3s;

        &.fold {
            width: calc(100vw - $menu_asidemin_width);
            left: $menu_asidemin_width;

        }
    }
}
</style>
