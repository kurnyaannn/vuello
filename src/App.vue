<script setup>
import { ref, watch, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import KanbanBoard from './components/kanban/KanbanBoard.vue'
import ContainerModal from '@/components/modals/ContainerModal.vue'

const store = useStore()
const displayContainerModal = ref(false)
const displayCardModal = ref(false)
const title = ref('Vuello Board')
const payload = computed(() => {
  return store.getters['vuello/getVuelloDatas']
})

onBeforeMount(async () => {
  const data = store.getters['vuello/getVuelloDatas']
  if (!data) {
    await axios.get('/sample-data.json').then(({ data }) => {
      store.dispatch('vuello/setVuello', data)
    })
  }
})
</script>

<template>
  <div v-if="payload" class="flex h-screen flex-col p-4">
    <h1 class="text-3xl font-bold">{{ payload.title }}</h1>
    <KanbanBoard
      :payload="payload"
      @addContainer="displayContainerModal = true"
    />
  </div>
  <!-- Container Modal -->

  <ContainerModal
    :value="displayContainerModal"
    @close="displayContainerModal = false"
  />
</template>
