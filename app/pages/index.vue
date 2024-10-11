<template>
  <div class="text-red-400">
    home page<Icon name="uil:github" style="color: black" />

    <h1>count: {{ store.count }}</h1>
    <button class="border p-2" @click="store.increment">add count</button>

    <NuxtImg
      src="https://erhang-cdn.imgix.net/logo.png?s=d81dd61f2201d3d91f2c2c2658d6ee0b"
    />

    <h3>{{ $t('global.siteName') }}s</h3>
  </div>
</template>

<script lang="ts" setup>
  const store = useCounterStore()
</script>

<style></style>
