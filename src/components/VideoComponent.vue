<script setup>
import { ref, onMounted, onBeforeUpdate, onBeforeUnmount } from 'vue';

import videoService from '@/services/videoService.js';
const videoProps = defineProps(['id', 'video', 'poster']);

const getVideoSrc = async () => {
  const video = ref(document.querySelector('#hover-video'));
  await videoService(video.value, videoProps.video);
}

const increaseSpeed = (event) => {
  const video = ref(document.querySelector('#hover-video'));
  if (event.key === 'ArrowUp' && event.ctrlKey) {
    video.value.playbackRate = video.value.playbackRate + 0.25; 
    console.log('increase', video.value.playbackRate);
  }
}

const decreaseSpeed = (event) => {
  const video = ref(document.querySelector('#hover-video'));
  if (event.key === 'ArrowDown' && event.ctrlKey) {
    if (video.value.playbackRate > 0.5) {
      video.value.playbackRate = video.value.playbackRate - 0.25; 
      console.log('decrease', video.value.playbackRate);
    }
  }
}

onMounted(() => {
  getVideoSrc();

  document.addEventListener('keydown', increaseSpeed);
  document.addEventListener('keydown', decreaseSpeed);
});

onBeforeUpdate(() => {
  getVideoSrc();
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', increaseSpeed);
  document.removeEventListener('keydown', decreaseSpeed);
});

</script>

<template>
  <video id="hover-video" class="rounded-xl" controls>
  </video>
</template>

<style scoped>
video {
  width: 100%;
  height: auto;
}
</style>