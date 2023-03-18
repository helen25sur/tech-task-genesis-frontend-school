<script setup>
import { ref, onBeforeMount } from 'vue';

// import Components
import SkillsListComponent from '@/components/SkillsListComponent.vue';
import RatingCourseComponent from '@/components/RatingCourseComponent.vue';
import LessonComponent from '@/components/LessonComponent.vue';

// Courses Service
import coursesService from '@/services/coursesService';
const CoursesService = new coursesService();

// Ref data
const course = ref({});
const isDataLoaded = ref(false);
const currentLesson = ref({});

// Props
const courseProps = defineProps(['id']);

// Methods
const getCourse = async () => {
  const detail = await CoursesService.getDetailCourse(courseProps.id);
  course.value = detail;
  console.log(detail);
  isDataLoaded.value = true;
  currentLesson.value = course.value.lessons[0];
}

// Lifecycle hooks
onBeforeMount(() => {
  getCourse();
});
</script>

<template>
  <header class="flex md:h-80">
    <img class="my-0 mx-auto poster" :src="course.previewImageLink + '/cover.webp'"
      :alt="course.title">
  </header>

  <main class="bg-slate-100 box-content py-1">
    <article class="course-content">
      <div class="title-block py-12 bg-teal-600 text-white text-center">
        <h1 class="sm:text-3xl text-2xl font-extrabold ">{{ course.title }}</h1>

        <RatingCourseComponent class="justify-center" :rating="course.rating"></RatingCourseComponent>
      </div>
      <div class="container mt-0 mb-10 mx-auto pb-10">

        <p class="py-6 sm:text-3xl text-2xl text-teal-500 text-center font-bold">{{ course.description }}</p>

        <div class="lessons-skills">

          <SkillsListComponent :skills="course.meta?.skills"></SkillsListComponent>

          <section class="lessons-section grid">
            <h2 class="lessons-title sm:text-2xl text-xl font-semibold text-teal-600">Lessons:</h2>
            <ul class="lessons-list">
              <li v-for="(lesson) in course.lessons" :key="lesson.id" class="list-item py-4 cursor-pointer">
                <h3 @click="currentLesson = lesson;"
                  class="text-xl font-semibold hover:text-teal-700 relative">
                  {{ lesson.title }}
                  <span class="absolute right-0 top-0 p-2 text-sm bg-gray-200 rounded-2xl">{{ lesson.status }}</span>
                  </h3>
                <hr>
              </li>
            </ul>

            <div class="lessons-preview relative">
              <LessonComponent :lesson="currentLesson"></LessonComponent>
            </div>
          </section>
        </div>

      </div>
    </article>
  </main>
</template>

<style scoped>
.lessons-section{
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 1fr;
  grid-template-areas: 
    'header header'
    'list preview';
  gap: 5px 30px;
}
.lessons-title {
  grid-area: header;
}
.lessons-list {
  grid-area: list;
}
.lessons-preview {
  grid-area: preview;
}

@media screen and (max-width: 900px) {
  .lessons-section{
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 1fr;
    grid-template-areas: 
      'header'
      'list' 
      'preview';
  }
}
</style>