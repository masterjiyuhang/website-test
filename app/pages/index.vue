<template>
  <div class="text-red-400">
    home page<Icon name="uil:github" style="color: black" />

    <h1>count: {{ store.count }}</h1>
    <button class="border p-2" @click="store.increment">add count</button>

    <NuxtImg
      src="https://resources.jctrans.com/res/hzh/pc/img/logo_nor@2x.png"
    />
  </div>
</template>

<script lang="ts" setup>
  const store = useCounterStore()
</script>

<style></style>
