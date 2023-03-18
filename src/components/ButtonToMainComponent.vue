<script setup>
import { useRouter } from 'vue-router';
defineProps(['title']);

const router = useRouter();

const goToMainPage = () => {
  router.push('/courses');
}
</script>

<template>
  <button 
      @click="goToMainPage"
      class="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 hover:from-orange-500 hover:to-teal-500 text-white font-semibold border border-solid border-teal-700 rounded-2xl uppercase cursor-pointer transition-colors">{{ title }}</button>
</template>