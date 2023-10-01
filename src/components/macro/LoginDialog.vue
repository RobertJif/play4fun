<script lang="ts" setup>
import authStore from '@/stores/auth'
import { ref, computed } from 'vue'
import useLoginApi from '@/libraries/api-client/useLoginApi'
import { useMutation } from '@tanstack/vue-query'

const username = ref('')
const password = ref('')

const { mutationFn, mutationKey } = useLoginApi()
const { mutate, isLoading } = useMutation({
  mutationFn,
  mutationKey
})

function onSubmit(e: Event) {
  e.preventDefault()
  console.log(username.value, password.value)
  mutate(
    {
      username: username.value,
      password: password.value
    },
    {
      onSuccess: (data) => authStore.handleLogin(data)
    }
  )
}

const isOpen = computed(() => authStore.isLoginDialogOpen && !authStore.isLoggedIn)
</script>

<template>
  <div class="w-full h-full fixed top-0 transition-all" v-show="isOpen">
    <div
      class="bg-gradient-100 bg-gradient-to-b fixed top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 font-bold rounded-md flex flex-col gap-4 z-20"
    >
      <form
        class="min-w-[300px] flex flex-col gap-2 relative p-4 pb-6"
        @submit="onSubmit"
        aria-disabled="true"
      >
        <div class="flex flex-col gap-1">
          <label class="block text-neutral-300 text-sm font-bold" for="username"> Username </label>
          <div class="relative">
            <input
              class="shadow appearance-none border text-neutral-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              v-model="username"
            />
            <div
              class="absolute bg-neutral-700 w-full h-full top-0 rounded-md opacity-70"
              v-show="isLoading"
            ></div>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label class="block text-neutral-300 text-sm font-bold" for="password"> Password </label>
          <div class="relative">
            <input
              class="shadow appearance-none border text-neutral-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              v-model="password"
            />
            <div
              class="absolute bg-neutral-700 w-full h-full top-0 rounded-md opacity-70"
              v-show="isLoading"
            ></div>
          </div>
        </div>
        <div class="relative mt-2">
          <button
            class="bg-secondary-200 w-full text-neutral-800 font-semibold px-4 py-1 rounded-lg"
            type="submit"
          >
            Login
          </button>
          <div
            class="absolute bg-neutral-700 w-full h-full top-0 rounded-md opacity-70"
            v-show="isLoading"
          ></div>
        </div>
      </form>
    </div>
    <div
      class="bg-neutral-700 z-10 opacity-80 w-full h-full fixed top-0"
      @click="authStore.closeLoginDialog()"
    ></div>
  </div>
</template>
