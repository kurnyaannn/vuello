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
const emits = defineEmits(['close'])

const modalAction = () => {
  emits('close')
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="value"
      class="z-5 fixed top-0 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black/25"
    >
      <div class="relative min-w-[400px] max-w-[600px] px-4">
        <div class="relative rounded-lg bg-white shadow">
          <div class="flex items-start justify-between rounded-t border-b p-5">
            <h3 class="text-xl font-semibold text-gray-900">
              Add New Container
            </h3>
            <div class="flex justify-end p-2">
              <button
                type="button"
                class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                @click="modalAction('close')"
              >
                <CloseIcon height="25px" />
              </button>
            </div>
          </div>
          <div class="space-y-6 p-6">
            <p class="text-base leading-relaxed text-gray-500">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-base leading-relaxed text-gray-500">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div
            class="flex items-center justify-end space-x-2 rounded-b border-t border-gray-200 px-6 py-4"
          >
            <Button model="outline" size="sm" rounded="md"> Cancel </Button>
            <Button type="primary" size="sm" rounded="md"> Save </Button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
