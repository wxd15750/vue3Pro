<template>
    <el-container class="common-layout">
        <el-aside width="200px" class="aside">
            <el-scrollbar>
                <h5 class="mb-2">LOGO</h5>
                <el-col>

                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>Navigator One</span>
                            </template>
                            <el-menu-item-group title="Group One">
                                <el-menu-item index="1-1">item one</el-menu-item>
                                <el-menu-item index="1-2">item two</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="Group Two">
                                <el-menu-item index="1-3">item three</el-menu-item>
                            </el-menu-item-group>
                            <el-sub-menu index="1-4">
                                <template #title>item four</template>
                                <el-menu-item index="1-4-1">item one</el-menu-item>
                            </el-sub-menu>
                        </el-sub-menu>
                        <el-menu-item index="2">
                            <el-icon><icon-menu /></el-icon>
                            <span>Navigator Two</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <el-icon>
                                <document />
                            </el-icon>
                            <span>Navigator Three</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <el-icon>
                                <setting />
                            </el-icon>
                            <span>Navigator Four</span>
                        </el-menu-item>
                    </el-menu>

                </el-col>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header class="header">
                <!-- 面包屑 -->
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <a href="/">promotion management</a>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- 退出登录的按钮 -->
                <button @click="layout">退出登录</button>
            </el-header>
            <el-scrollbar>
            <el-main class="main">
                

                    <el-card>
                        <template #header>Yummy hamburger</template>
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="width: 100%" />
                    </el-card>
            </el-main>
        </el-scrollbar>
            <!-- <el-footer class="footer">Footer</el-footer> -->
        </el-container>
    </el-container>

</template>
<script lang="ts" setup name='Home'>
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '../../store/userInfo'
const { userLayout } = useUserStore()
const router = useRouter()
const route = useRoute()

// 退出登录
const layout = async () => {
    await userLayout()
    router.push({ path: '/login', query: { redirect: route.path } })
}
</script>

<style lang="scss" scoped>
.common-layout {
    width: 100%;
    height: 100%;

    .aside {
        background-color: #337ecc;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #c7cace;
    }

    .main {
        background-color: #6ed48d;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #c789d6;

    }
}
</style>
