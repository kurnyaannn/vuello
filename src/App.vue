<script setup>
import { ref, reactive, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import MoveIcon from './components/icons/MoveIcon.vue'

const store = useStore()
const example = computed(() => {
  return store.getters['vuello/getD']
})
const vuello = reactive({
  containers: [],
  cards: [],
})
const isDraggable = ref(false)

onBeforeMount(async () => {
  await axios.get('/src/sample-data.json').then(({ data }) => {
    vuello.containers = data.containers
    vuello.cards = data.cards
  })
})

const cardList = (containerId) => {
  return vuello.cards.filter((card) => card.id_container === containerId)
}
const dragItem = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('id', item.id)
}
const dropItem = (event, containerId) => {
  const id = event.dataTransfer.getData('id')
  const item = vuello.cards.find((card) => card.id == id)
  item.id_container = containerId
}
const displayCardDetail = (card) => {
  console.log('Selected Card', card)
}
</script>

<template>
  <div class="flex h-screen flex-col p-4">
    <div>Kanban Title</div>
    <div
      v-if="vuello.containers.length > 0"
      class="flex h-full w-full overflow-auto rounded-lg bg-[#F2F3F9] px-2 py-3"
    >
      <div
        v-for="container in vuello.containers"
        :key="container.id"
        class="mx-1"
      >
        <div
          class="min-h-[50px] min-w-[300px] rounded-lg bg-[#E4E5EC] p-1"
          @drop="dropItem($event, container.id)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div class="text-semibold p-1">
            {{ container.name }} ({{ cardList(container.id).length }})
          </div>
          <div
            v-for="card in cardList(container.id)"
            :key="card.id"
            class="m-1 cursor-pointer rounded-lg bg-white p-2"
            :draggable="isDraggable"
            @dragstart="dragItem($event, card)"
            @click="displayCardDetail(card)"
          >
            <div class="flex place-items-center justify-between">
              <h1>{{ card.title }}</h1>
              <MoveIcon
                height="22px"
                class="rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
                @mouseenter="isDraggable = true"
                @mouseleave="isDraggable = false"
              />
            </div>
            <p>{{ card.content }}</p>
          </div>
          <div
            class="m-1 flex cursor-pointer place-items-center justify-center rounded-lg bg-white p-2"
          >
            Add More
          </div>
        </div>
      </div>
      <div class="mx-1">
        <div
          class="flex min-h-[50px] min-w-[300px] place-items-center justify-center rounded-lg bg-[#E4E5EC] p-1"
        >
          Add More
        </div>
      </div>
    </div>
  </div>
</template>
