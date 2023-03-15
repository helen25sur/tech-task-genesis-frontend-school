<script setup>
defineProps(['video', 'poster']);
</script>

<template>
  <video :src="video" :poster="poster + '/cover.webp'" controls></video>
</template>