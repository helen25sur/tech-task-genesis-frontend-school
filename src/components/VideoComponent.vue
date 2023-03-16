<script setup>
defineProps(['id', 'video', 'poster']);
</script>

<template>
  <video id="hover-video" class="video-js rounded-xl" muted="muted" preload="auto" data-setup="{}" 
    :poster="poster + '/cover.webp'">
    <source :src="video" type="application/x-mpegURL">
  </video>
</template>

<style scoped>
  video {
    width: 100%;
    height: auto;
  }
</style>
<!-- src="https://wisey.app/videos/the-secret-to-speed-learning/preview/AppleHLS1/preview.m3u8" -->
  <!-- role="application" tabindex="-1"width="400" height="150" -->