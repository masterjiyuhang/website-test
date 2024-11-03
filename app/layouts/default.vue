<template>
  <div>
    <img :src="cat" alt="" />
    <Header />
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import cat from '@/assets/images/cat.png'
</script>

<style></style>
