<script setup>
// 
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

// import Components
// import VideoComponent from './VideoComponent.vue';
import SkillsListComponent from '@/components/SkillsListComponent.vue';
import RatingCourseComponent from '@/components/RatingCourseComponent.vue';

// Courses Service
import coursesService from '@/services/coursesService';
const CoursesService = new coursesService();

defineProps(['id']);

const router = useRouter();
const id = ref(router.currentRoute.value.path.slice(9));

// Ref data
const course = ref({});

// Methods
const getCourse = async () => {
  const detail = await CoursesService.getDetailCourse(id.value);
  course.value = detail;
  console.log(detail);
}

// Lifecycle hooks
onBeforeMount( () => {
  getCourse();
});

</script>

<template>
  <header v-if="course" class="flex h-80" >
    <img class="my-0 mx-auto poster" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">
  </header>
  <main class="bg-slate-100 box-content">
    <div class="container my-0 mx-auto py-4">
      <article v-if="course" class="course-content">
        <div class="title-block bg-teal-600 text-white">
          <h1 class="py-12 text-3xl text-center font-extrabold ">{{ course.title }}</h1>
        </div>

        <p class="py-6 text-3xl text-teal-500 text-center font-bold">{{ course.description }}</p>
        <RatingCourseComponent :rating="course.rating"></RatingCourseComponent>

        <div class="lessons-skills">
          <section class="lessons">
            <ul class="lessons-list">
              <li class="list-item" v-for="lesson in course.lessons" :key="lesson.id">
                <h2>{{ lesson.title }}</h2>
                <!-- <img :src="`${lesson.previewImageLink}/${lesson.order}.webp`" :alt="lesson.title"> -->
              </li>
            </ul>
            <SkillsListComponent :skills="course.meta?.skills"></SkillsListComponent>
          </section>
        </div>

      </article>
    </div>
  </main>
</template>

<style scoped>
.poster {
  object-fit: cover;
}

.title-block h1 {
  letter-spacing: 1.5px;
}
</style>