<script lang="ts" setup>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import authStore from '@/stores/auth'
</script>

<template>
  <div class="fixed t-0 w-full bg-gradient-100 bg-gradient-to-b p-2 flex justify-between">
    <LogoIcon class="w-24 h-auto" />
    <!-- <SearchIcon
      class="w-8 [&>path]:fill-neutral-100"
    /> -->

    <button
      class="bg-secondary-100 w-32 text-neutral-800 font-semibold rounded-lg"
      @click="authStore.handleLogout()"
      v-show="authStore.isLoggedIn"
    >
      Logout
    </button>
  </div>
</template>
