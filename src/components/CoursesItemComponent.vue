<script setup>
import { ref } from 'vue';

// import Components
import VideoComponent from '@/components/VideoComponent.vue';
import SkillsListComponent from '@/components/SkillsListComponent.vue';
import RatingCourseComponent from '@/components/RatingCourseComponent.vue';

defineProps(['course', 'idx']);

const isVisibleVideo = ref(false);
</script>

<template>
  <article 
    @mouseover="isVisibleVideo = true"
    @mouseleave="isVisibleVideo = false"
    class="m-4 md:my-6 md:p-6 p-3  bg-slate-200 rounded-2xl border border-solid border-gray-300 cursor-pointer hover:bg-slate-300 hover:border-gray-400 transition-all">

    <router-link :to="`courses/${course.id}`">

    <h2 class="mb-6 md:text-2xl text-xl uppercase font-bold text-teal-500">{{ course.title }}</h2>
    <div class="description-course grid gap-6">
      <img v-if="!isVisibleVideo || course.meta.courseVideoPreview === undefined" class="rounded-xl mb-12" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">

      <VideoComponent v-if="isVisibleVideo && course.meta.courseVideoPreview"
          :id="course.id"
          :video="course.meta.courseVideoPreview?.link"
          :poster="course.previewImageLink + '/cover.webp'"
          autoplay muted></VideoComponent>

      <div class="detail">
        <p class="font-bold">Count of lessons: <span
            class="inline-block ml-3 py-1 px-3 bg-orange-300 border border-solid border-orange-400 rounded-sm"> {{ course.lessonsCount }}</span>
          
        <span class="ml-20 ">
        <span class="text-orange-500 text-lg">
          <font-awesome-icon icon="fa-regular fa-hourglass" />
        </span>
        <span class="text-black ml-3">Duration:</span>
          <span
            class="inline-block ml-3 py-1 px-3 bg-orange-300 border border-solid border-orange-400 rounded-sm text-black">
        {{ course.duration }}</span></span>
           </p>

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
@media screen and (max-width: 800px) {
  .description-course {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}
.skills-list {
  width: 100%;
}
</style>