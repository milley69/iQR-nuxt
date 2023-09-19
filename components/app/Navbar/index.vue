<template>
  <header
    class="duration-200 flex h-16 justify-center fixed text-base-content top-0 transition-all z-30 navbar w-full bg-base-100/50 backdrop-blur-[10px]"
  >
    <div class="flex-1">
      <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">iQR</nuxt-link>
    </div>
    <div class="flex-none gap-3">
      <app-navbar-theme-switcher />
      <app-navbar-user v-if="isAuth" />
      <app-navbar-auth v-else />
    </div>
  </header>
</template>

<script setup lang="ts">
const isAuth = ref(0)
</script>
