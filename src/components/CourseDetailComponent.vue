<script setup>
import { ref, onBeforeMount } from 'vue';

// import Components
import SkillsListComponent from '@/components/SkillsListComponent.vue';
import RatingCourseComponent from '@/components/RatingCourseComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';


// Courses Service
import coursesService from '@/services/coursesService';
const CoursesService = new coursesService();

// Ref data
const course = ref({});
const isDataLoaded = ref(false);
const isLessonPreview = ref(false);
const isVisibleVideo = ref(false);

// Props
const courseProps = defineProps(['id']);

// Methods
const getCourse = async () => {
  const detail = await CoursesService.getDetailCourse(courseProps.id);
  course.value = detail;
  console.log(detail);
  isDataLoaded.value = true;
}

// Lifecycle hooks
onBeforeMount(() => {
  getCourse();
});
</script>

<template>
  <header @mouseover="isVisibleVideo = true" @mouseleave="isVisibleVideo = false" class="flex md:h-80">
    <img v-if="!isVisibleVideo" class="my-0 mx-auto poster" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">

    <VideoComponent style="width: 50%; margin: 0 auto;" v-else-if="isVisibleVideo" :id="course.id" :video="course.meta.courseVideoPreview.link"
    :poster="course.previewImageLink"></VideoComponent>
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

          <section class="lessons">
            <h2 class="sm:text-2xl text-xl font-semibold text-teal-600">Lessons:</h2>
            <ul class="lessons-list mt-4">
              <li v-for="lesson in course.lessons" :key="lesson.id" class="list-item py-2 cursor-pointer">
                <h3 @click="isLessonPreview = true" class="text-xl font-semibold hover:text-teal-700 ">
                  {{ lesson.title }}</h3>
                <hr>
              </li>
            </ul>
            <!-- <div v-if="isLessonPreview" class="lesson-preview">
                      <span>{{ course.lesson.order }}</span>
                      <img :src="course.previewImageLink + '/' + course.lesson.order + '.webp'" :alt="course.lesson.title">
                       </div> -->
          </section>
        </div>

      </div>
    </article>
  </main>
</template>