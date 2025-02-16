<script setup lang="ts">
const { data, refresh }  = await useAsyncData('test', () => useSanctumFetch("/api/test"));
</script>

<template>
  {{ data }}
  <button v-on:click="() => refresh()">Regarregar</button>
</template>
