<script setup lang="ts">
const { data, refresh } = await useAsyncData('test', () =>
	useSanctumFetch('/api/test')
);
</script>

<template>
	{{ data }}
	<button
		class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
		v-on:click="() => refresh()"
	>
		Regarregar
	</button>
</template>
