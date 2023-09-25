<script lang="ts" setup>
import type { GameType } from './types'

const props = defineProps<{
  detail: GameType
}>()
</script>

<template>
  <div class="border-primary-100 border-2 h-24 w-full rounded-md flex">
    <div class="flex items-center h-full px-2 w-fit">
      <img class="w-20 h-20" :src="props.detail.gameImagePath" />
    </div>
    <div class="w-full h-full bg-neutral-800 flex-1 p-2 pt-1">
      <div class="flex flex-row justify-between">
        <h1 class="font-bold">{{ props.detail.name }}</h1>
        <button class="bg-neutral-200 text-neutral-800 font-semibold px-4 rounded-lg">Go</button>
      </div>
      <p class="text-xs text-justify pt-1 line-clamp-3" v-html="props.detail.descriptionHTML"></p>
    </div>
  </div>
</template>
