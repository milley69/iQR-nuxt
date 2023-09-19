<template>
  <div class="relative flex flex-col gap-6">
    <div class="absolute select-none -top-12 -left-12">
      <i class="bx bxs-quote-alt-left text-neutral !text-7xl"></i>
    </div>
    <blockquote class="z-10 max-w-lg text-3xl">
      {{ quote.text }}
    </blockquote>
    <div class="flex items-center gap-4">
      <div class="avatar inline-block">
        <div class="w-12 mask mask-squircle">
          <img :src="quote.user.avatar" :alt="quote.user.name" />
        </div>
      </div>

      <span class="flex flex-col">
        <cite class="not-italic font-medium text-scale-1100 whitespace-nowrap">@{{ quote.user.name }}</cite>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const quote = {
  user: {
    name: 'milley',
    avatar: 'https://cdn.discordapp.com/avatars/1071044442598932560/a619d62eeeba62890a1ee282e6bbc0e8.webp?size=128',
  },
  text: 'QR кода это вроде обыденность уже, но оказалось, что кастомные выглядят просто приятно.',
}
</script>
