<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="red" :duration="6000" :height="10" />
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  // Use SSR-safe IDs for Headless UI
  provideHeadlessUseId(() => useId())
</script>
