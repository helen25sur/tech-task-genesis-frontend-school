<script setup>
import { ref } from 'vue';
// import { useRouter, useRoute } from 'vue-router';

// import Components
import VideoComponent from './VideoComponent.vue';
import SkillsListComponent from './SkillsListComponent.vue';
import RatingCourseComponent from './RatingCourseComponent.vue';

defineProps(['course', 'idx']);

const isVisibleVideo = ref(false);

</script>

<template>
  <article 
    @mouseover="isVisibleVideo = true"
    @mouseleave="isVisibleVideo = false"
    class="my-6 p-6 bg-slate-200 rounded-2xl border border-solid border-gray-300 cursor-pointer hover:bg-slate-300 hover:border-gray-400 transition-all">

    <router-link :to="`courses/${course.id}`">

    <h2 class="mb-6 text-2xl uppercase font-bold text-teal-500">{{ course.title }}</h2>
    <div class="description-course grid gap-6">
      <img v-if="!isVisibleVideo" class="rounded-xl" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">

      <!-- Link don't work -->
      <VideoComponent v-if="isVisibleVideo"
          :id="idx"
          :video="course.meta.courseVideoPreview.link"
          :poster="course.previewImageLink"></VideoComponent>

      <div class="detail">
        <p class="font-bold">Count of lessons: <span
            class="inline-block ml-3 py-1 px-3 bg-orange-300 border border-solid border-orange-400 rounded-sm"> {{ course.lessonsCount }}</span> </p>

        <SkillsListComponent :skills="course.meta.skills"></SkillsListComponent>

        <RatingCourseComponent :rating="course.rating"></RatingCourseComponent>
      </div>
    </div>
    </router-link>
  </article>
</template>

<style scoped>
.description-course {
  grid-template-columns: 40% 1fr;
}

.skills-list {
  width: 100%;
}
</style>