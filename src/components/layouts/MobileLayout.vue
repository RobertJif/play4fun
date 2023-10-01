<script setup lang="ts">
import AppBar from '@/components/macro/AppBar.vue'
// import AppDrawer from '@/components/macro/AppDrawer.vue'
import AppBottomNavigation from '@/components/macro/BottomNavigation.vue'
import LoginDialog from '../macro/LoginDialog.vue'
</script>
<template>
  <AppBar />
  <!-- <AppDrawer /> -->
  <div class="before:h-12 before:w-full before:block after:block after:w-full after:h-14">
    <slot></slot>
  </div>
  <AppBottomNavigation />
  <LoginDialog />
</template>
