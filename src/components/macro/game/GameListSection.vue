<script lang="ts" setup>
import GameCard from './GameCard.vue'
import { useQuery } from '@tanstack/vue-query'

import useGameListApi from '@/libraries/api-client/useGameListApi'

const { queryFn, queryKey } = useGameListApi()

const {
  data: gameList,
  isLoading,
  isError,
  error
} = useQuery({
  queryKey,
  queryFn
})
console.log(gameList.value)
</script>

<template>
  <div class="flex px-2" v-if="!isLoading && gameList && gameList.length > 0">
    <p>{{ isError ? error : '' }}</p>
    <GameCard v-for="game in gameList" :key="game.code" :detail="game" />
  </div>
</template>
