<script setup>
// import Components
import VideoComponent from './VideoComponent.vue';
import SkillsListComponent from './SkillsListComponent.vue';
import RatingCourseComponent from './RatingCourseComponent.vue';

defineProps(['course', 'idx']);
</script>

<template>
  <article class="my-6 p-6 bg-slate-200 rounded-2xl border border-solid border-gray-300">
    <h2 class="mb-6 text-2xl uppercase font-bold text-teal-500">{{ course.title }}</h2>
    <div class="description-course grid gap-6">
      <img class="rounded-xl" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">

      <!-- Link don't work -->
      <VideoComponent v-if="course.meta.courseVideoPreview"
          :id="idx"
          :video="course.meta.courseVideoPreview.link"
          :poster="course.previewImageLink"></VideoComponent>

      <div class="detail">
        <p class="font-bold">Count of lessons: <span
            class="inline-block ml-3 py-1 px-3 bg-orange-300 border border-solid border-orange-400 rounded-sm">{{
              course.lessonsCount }}</span> </p>

        <SkillsListComponent :skills="course.meta.skills"></SkillsListComponent>

        <RatingCourseComponent :rating="course.rating"></RatingCourseComponent>
      </div>
    </div>
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