<script setup lang="ts">
</script>

<template>
	<RouterView v-slot="{ Component }">
		<keep-alive :is="Component"/>
	</RouterView>
</template>