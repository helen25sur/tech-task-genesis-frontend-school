<script setup>
import { ref, onMounted } from 'vue';

import videoService from '@/services/videoService.js';
const videoProps = defineProps(['id', 'video', 'poster']);

const getVideoSrc = async () => {
  let video = ref(document.querySelector('#hover-video'));
  await videoService(video.value, videoProps.video);
}

onMounted(() => {
  getVideoSrc();
});

</script>

<template>
  <video id="hover-video" class="rounded-xl" autoplay muted controls>
  </video>
</template>

<style scoped>
video {
  width: 100%;
  height: auto;
}
</style>