<script setup>
import { ref, onMounted, onBeforeUpdate } from 'vue';

import videoService from '@/services/videoService.js';
const videoProps = defineProps(['id', 'video', 'poster']);

const getVideoSrc = async () => {
  const video = ref(document.querySelector('#hover-video'));
  await videoService(video.value, videoProps.video);
}

const increaseSpeed = () => {
  const video = ref(document.querySelector('#hover-video'));
  video.value.playbackRate = video.value.playbackRate + 0.25; 
  console.log('increase', video.value.playbackRate);
}

const decreaseSpeed = () => {
  const video = ref(document.querySelector('#hover-video'));
  if (video.value.playbackRate > 0.5) {
    video.value.playbackRate = video.value.playbackRate - 0.25; 
    console.log('decrease', video.value.playbackRate);
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.key === 'ArrowUp' && event.ctrlKey) {
    increaseSpeed();
  } else if (event.key === 'ArrowDown' && event.ctrlKey) {
    decreaseSpeed();
  }
})


onMounted(() => {
  const video = ref(document.querySelector('#hover-video'));
  video.value.defaultPlaybackRate = 1;
  getVideoSrc();
});

onBeforeUpdate(() => {
  const video = ref(document.querySelector('#hover-video'));
  video.value.defaultPlaybackRate = 1;
  getVideoSrc();
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