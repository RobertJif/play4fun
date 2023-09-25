<script lang="ts" setup>
import GameCard from './GameCard.vue'
import { useQuery } from 'vue-query'

import useGameListApi, { type GameResponseType } from '@/libraries/api-client/useGameListApi'

const { fetcher, queryCode } = useGameListApi()

const { data: gameList, isLoading } = useQuery<GameResponseType[]>(queryCode, () =>
  fetcher(undefined)
)
</script>

<template>
  <div class="flex px-2" v-if="isLoading && gameList.length > 0">
    <GameCard v-for="game in gameList" :key="game.code" :detail="game" />
  </div>
  <!-- <div></div> -->
</template>
