<template>
    <div class="layout">
        <!-- 菜单栏 -->
        <div class="layout_aside">
            <!-- LOGO -->
            <Logo />
            <!-- 菜单栏 -->
            <Menu :meunList="userStore.menuRoutes" />
        </div>
        <div class="layout_right">
            <div class="layout_header">导航栏
                <Tabber />
            </div>
            <div class="layout_content">
                <el-card>
                    内容区
                    <Content />
                </el-card>
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup name='Layouts'>
import Logo from './modules/logo.vue'
import Menu from './modules/menu.vue'
import Tabber from './modules/tabber.vue'
import Content from './modules/content.vue'
import Footer from './modules/footer.vue'
// 获取仓库的路由数据
import useUserStore from '../store/userInfo'
let userStore = useUserStore()
console.log(userStore.menuRoutes);

</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #d36f6f;
    color: #fff;

    .layout_aside {
        width: $menu_aside_width;
        height: 100%;
        background-color: $menu_aside_background;

        .el-scrollbar {
            height: calc(100vh - $logo_height);
        }
    }

    .layout_right {
        .layout_header {
            height: $nav_header_height;
            width: calc(100vw - $menu_aside_width);
            background-color: #78e794;
        }

        .layout_content {
            box-sizing: border-box;
            padding: 20px;
            height: calc(100vh - $nav_header_height - $footer_height);
        }

        .footer {
            height: $footer_height;
        }
    }
}
</style>
