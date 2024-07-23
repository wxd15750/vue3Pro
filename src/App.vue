<template>
    <div>

        <button>
            <RouterLink to="/">首页</RouterLink>

        </button>
        <button>
            <RouterLink to="/login">登录页</RouterLink>

        </button>
        <RouterView></RouterView>
    </div>
</template>
<script lang="ts" setup name='App'>
</script>

<style lang="scss" scoped></style>
