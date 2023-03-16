<script setup>
// 
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

// import Components
// import VideoComponent from './VideoComponent.vue';
import SkillsListComponent from '@/components/SkillsListComponent.vue';
import RatingCourseComponent from '@/components/RatingCourseComponent.vue';
import SpinnerComponent from '../components/SpinnerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

// Courses Service
import coursesService from '@/services/coursesService';
const CoursesService = new coursesService();

defineProps(['id']);

const router = useRouter();
const id = ref(router.currentRoute.value.path.slice(9));

// Ref data
const course = ref({});
const isLessonPreview = ref(false);
const isLoaded = ref(false);

// Methods
const getCourse = async () => {
  const detail = await CoursesService.getDetailCourse(id.value);
  course.value = detail;
  console.log(detail);
  isLoaded.value = true;
}

const goToMainPage = () => {
  router.push('/');
}

// Lifecycle hooks
onBeforeMount( () => {
  getCourse();
});

</script>

<template>
<template v-if="!isLoaded">
    <SpinnerComponent ></SpinnerComponent>
</template>
  <header v-if="isLoaded" class="flex h-80" >
    <button 
      @click="goToMainPage"
      class="absolute top-10 left-40  py-2 px-6 bg-teal-500 border border-solid border-teal-600 rounded-3xl text-white font-bold uppercase cursor-pointer">All Courses</button>
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