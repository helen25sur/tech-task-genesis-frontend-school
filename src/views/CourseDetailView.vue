<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// import Components 
import CourseDetailComponent from '@/components/CourseDetailComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ButtonToMainComponent from '@/components/ButtonToMainComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

const router = useRouter();

// Ref data
const id = ref(router.currentRoute.value.path.slice(9));
const isDataLoaded = ref(false);


</script>

<template>
  <SpinnerComponent v-if="!isDataLoaded"></SpinnerComponent>
  <div v-if="isDataLoaded">
    <ButtonToMainComponent class="absolute lg:top-10 xl:left-40 top-5 left-10" title="All Courses"></ButtonToMainComponent>
  </div>

  <CourseDetailComponent v-show="isDataLoaded" :id="id" @vnodeBeforeUpdate="isDataLoaded = true"></CourseDetailComponent>

  <FooterComponent v-if="isDataLoaded"></FooterComponent>
</template>

<style scoped>
.poster {
  object-fit: cover;
}

.title-block h1 {
  letter-spacing: 1.5px;
}
</style>