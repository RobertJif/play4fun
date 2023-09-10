<script lang="ts" setup>
import layoutStore from '@/stores/layout'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
</script>

<template>
  <div class="fixed t-0 w-full bg-gradient-100 bg-gradient-to-b p-2 flex justify-between">
    <LogoIcon class="w-24 h-auto" />
    <SearchIcon
      class="w-8 [&>path]:fill-neutral-100"
      @click="layoutStore.isDrawerOpen ? layoutStore.closeDrawer() : layoutStore.openDrawer()"
    />
  </div>
</template>
