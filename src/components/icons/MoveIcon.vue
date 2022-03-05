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
    class="css-i6dzq1"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
</template>
