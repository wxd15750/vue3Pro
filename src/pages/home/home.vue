<template>
    <div>
        我是首页组件
        <button @click="layout">退出登录</button>
    </div>
</template>
<script lang="ts" setup name='Home'>
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '../../store/userInfo'
const { userLayout } = useUserStore()
const router = useRouter()
const route = useRoute()
const layout = async () => {
    await userLayout()
    router.push({ path: '/login', query: { redirect: route.path } })
}
</script>

<style lang="scss" scoped></style>
