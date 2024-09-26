<template>
    <div class="logo">
        <img src="../../assets/images/logo.png" />
        <p>后台管理系统</p>
    </div>
</template>
<script lang="ts" setup name='Logo'>
</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    height: $logo_height;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    box-sizing: border-box;

    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
}
</style>
