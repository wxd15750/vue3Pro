<template>
	<el-scrollbar class="menu_list"  >
		<el-menu
				active-text-color="#ffd04b"
				background-color="$menu_aside_background"
				class="el-menu-vertical-demo"
				text-color="#fff"
				@open="handleOpen"
				@close="handleClose">
			<el-menu-item v-for="item in 20" :key="item" >
				<span>{{ item }}</span>
			</el-menu-item>
		</el-menu>

	</el-scrollbar>
</template>
<script lang="ts" setup name='Menu'>
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.menu_list{
	height: calc(100vh - $nav_header_height);
  p{
    height: 20px;
  }
}
</style>
