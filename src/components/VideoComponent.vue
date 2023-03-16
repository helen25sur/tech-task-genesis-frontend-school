<script setup>
const videoProps = defineProps(['id', 'video', 'poster']);
console.log(`my-video${videoProps.id}`);

</script>

<template>
  <video
    :id="`my-video${id}`"
    class="video-js"
    preload="auto"
    controls 
    muted
    width="400"
    height="150"
    :poster="poster + '/cover.webp'"
    data-setup="{}">
    <source src="https://wisey.app/videos/the-secret-to-speed-learning/preview/AppleHLS1/preview.m3u8" type="application/x-mpegURL">
  </video>
</template>

<style ></style>