<script setup>
import Button from '@/components/base/Button.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
const props = defineProps({
  value: {
    type: Boolean,
    required: true,
    default: false,
  },
})
const emits = defineEmits(['confirm', 'close'])

const modalAction = (type) => {
  if (type === 'confirm') {
    emits('confirm')
  } else {
    emits('close')
  }
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="value"
      class="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black/25"
    >
      <div class="relative min-w-[400px] max-w-[450px] px-4">
        <div class="relative rounded-lg bg-white shadow">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              @click="modalAction('close')"
            >
              <CloseIcon height="25px" />
            </button>
          </div>
          <div class="p-6 pt-0 text-center">
            <svg
              class="mx-auto mb-4 h-14 w-14 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h4 class="text-md mb-5 font-normal text-gray-500">
              <slot></slot>
            </h4>
            <div class="flex w-full justify-center">
              <div class="flex w-2/3 place-items-center justify-evenly">
                <Button
                  type="primary"
                  size="md"
                  rounded="md"
                  @click="modalAction('confirm')"
                >
                  Yes
                </Button>
                <Button
                  model="outline"
                  size="md"
                  rounded="md"
                  @click="modalAction('close')"
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
