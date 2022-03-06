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
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
</template>
