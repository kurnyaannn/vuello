<script setup>
const props = defineProps({
  height: String,
  width: String,
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
</template>
