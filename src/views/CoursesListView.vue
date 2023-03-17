<script setup>
import { ref } from 'vue';

import SpinnerComponent from '@/components/SpinnerComponent.vue';
import CoursesListComponent from '@/components/CoursesListComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

// Ref data
const isLoaded = ref(false);

</script>


<template>
  <template v-if="!isLoaded">
    <SpinnerComponent></SpinnerComponent>
  </template>
  <CoursesListComponent v-show="isLoaded" @vnodeBeforeUpdate="isLoaded = true"></CoursesListComponent>
  <FooterComponent v-if="isLoaded"></FooterComponent>
</template>
