<template>

    <router-view v-slot="{ Component }">
        <transition name="fade">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>
<script lang="ts" setup name='Content'>
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: all .5s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
