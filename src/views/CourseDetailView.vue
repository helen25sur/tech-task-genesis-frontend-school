<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

// import Components
// import VideoComponent from './VideoComponent.vue';
import SkillsListComponent from '@/components/SkillsListComponent.vue';
import RatingCourseComponent from '@/components/RatingCourseComponent.vue';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ButtonToMainComponent from '../components/ButtonToMainComponent.vue';

// Courses Service
import coursesService from '@/services/coursesService';
const CoursesService = new coursesService();

const router = useRouter();

// Ref data
const course = ref({});
const isLessonPreview = ref(false);
const isLoaded = ref(false);
const id = ref(router.currentRoute.value.path.slice(9));

// Methods
const getCourse = async () => {
  const detail = await CoursesService.getDetailCourse(id.value);
  course.value = detail;
  console.log(detail);
  isLoaded.value = true;
}

// Lifecycle hooks
onBeforeMount( () => {
  getCourse();
});

</script>

<template>
  <SpinnerComponent v-if="!isLoaded"></SpinnerComponent>

  <header v-if="isLoaded" class="flex h-80">

    <ButtonToMainComponent class="absolute top-10 left-40" title="All Courses"></ButtonToMainComponent>

    <img class="my-0 mx-auto poster" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">
  </header>

  <main v-if="isLoaded" class="bg-slate-100 box-content">
    <div class="container mt-0 mb-10 mx-auto pb-10">
      <article class="course-content">
        <div class="title-block py-12 bg-teal-600 text-white text-center">
          <h1 class="text-3xl  font-extrabold ">{{ course.title }}</h1>

        <RatingCourseComponent class="justify-center" :rating="course.rating"></RatingCourseComponent>
        </div>

        <p class="py-6 text-3xl text-teal-500 text-center font-bold">{{ course.description }}</p>

        <div class="lessons-skills">

            <SkillsListComponent :skills="course.meta?.skills"></SkillsListComponent>
            
          <section class="lessons">
          <h2 class="text-2xl font-semibold text-teal-600">Lessons:</h2>
            <ul class="lessons-list mt-4">
              <li 
                v-for="lesson in course.lessons" 
                :key="lesson.id"
                
                class="list-item py-2 cursor-pointer">
                <h3
                  @click="isLessonPreview = true"
                  class="text-xl font-semibold hover:text-teal-700 ">
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

      </article>
    </div>
  </main>
  <FooterComponent v-if="isLoaded"></FooterComponent>
</template>

<style scoped>
.poster {
  object-fit: cover;
}

.title-block h1 {
  letter-spacing: 1.5px;
}
</style>