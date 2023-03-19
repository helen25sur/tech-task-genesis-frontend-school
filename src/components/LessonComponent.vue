<script setup>
import VideoComponent from '@/components/VideoComponent.vue';

defineProps(['lesson']);

</script>

<template>
  <span class="flex items-center justify-center bg-teal-600 text-white font-bold rounded-full w-10 h-10 absolute ">{{ lesson.order }}</span>
  <h4 class="pl-6 text-teal-700 font-semibold text-2xl text-center"> {{ lesson.title }}</h4>
    <span v-if="lesson.status === 'locked'" class="locked absolute  w-60 h-30 text-lg p-6 text-center font-bold bg-gray-200 rounded-2xl z-10">{{ lesson.status }}</span>
    <div v-if="lesson.type === 'video'">
      <p class="mt-2">If you want to increase speed of video - press <span style="font-family: 'Courier New', Courier, monospace;" class="text-orange-700 text-lg">Ctrl + ArrowUp</span></p>
      <p>If you want to decrease speed of video - press <span style="font-family: 'Courier New', Courier, monospace;" class="text-orange-700 text-lg">Ctrl + ArrowDown</span></p>
      <VideoComponent class="mt-6" :id="lesson.id" :video="lesson.link"></VideoComponent>
    </div>
    <div v-else-if="lesson.type === 'quiz_simulator'">
      <img v-if="lesson.previewImageLink !== 'https://wisey.app/assets/images/web/no-cover.webp'" class="mt-6 rounded-xl" :src="lesson.previewImageLink + '/lesson-' + lesson.order + '.webp'" :alt="lesson.title">
      <img v-else src="https://wisey.app/assets/images/web/no-cover.webp" :alt="lesson.title + ' no image cover'">
    </div>
    <div v-else-if="lesson.type === 'article'">
      <iframe :src="lesson.link" frameborder="0" style="width: 100%; min-height: 600px;"></iframe>
    </div>
</template>

<style scoped>
.locked {
  top: 33%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
}
</style>