<script setup>
import VideoComponent from '@/components/VideoComponent.vue';

defineProps(['lesson']);

</script>

<template>
  <span class="flex items-center justify-center bg-teal-600 text-white font-bold rounded-full w-10 h-10 absolute ">{{ lesson.order }}</span>
  <h4 class="pl-6 text-teal-700 font-semibold text-2xl text-center"> {{ lesson.title }}</h4>
    <span v-if="lesson.status === 'locked'" class="locked absolute  w-60 h-30 text-lg p-6 text-center font-bold bg-gray-200 rounded-2xl z-10">{{ lesson.status }}</span>
   <VideoComponent class="mt-6" :id="lesson.id" :video="lesson.link"></VideoComponent>
</template>

<style scoped>
.locked {
  top: 33%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
}
</style>