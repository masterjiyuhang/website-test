<template>
  <div class="text-red-400">
    <div class="py-16">
      <HeadlessSwitch
        v-model="enabled"
        :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </HeadlessSwitch>
    </div>
    <Icon name="uil:github" style="color: black" />

    <h1 class="text-blue-400">count: {{ store.count }}</h1>
    <button class="border p-2" @click="store.increment">add count</button>

    <NuxtImg
      src="https://erhang-cdn.imgix.net/logo.png?s=d81dd61f2201d3d91f2c2c2658d6ee0b"
    />

    <h3>{{ $t('global.siteName') }}</h3>
  </div>
</template>

<script lang="ts" setup>
  const store = useCounterStore()

  const enabled = ref(false)
</script>

<style></style>
