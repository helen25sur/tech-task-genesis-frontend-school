<script setup>
import { ref, onMounted } from 'vue';

// import Components
import PaginationComponent from '@/components/PaginationComponent.vue';
import CoursesItemComponent from '../components/CoursesItemComponent.vue';

// Courses Service
import coursesService from '../services/coursesService';
const CoursesService = new coursesService();

const courseList = ref([]);

const getAllCourses = async () => {
  const list = await CoursesService.getCourses();
  console.log(list);
  courseList.value = list;
}

onMounted(() => {
  getAllCourses();
});

</script>

<template>
  <main class="bg-slate-100 box-content">
    <div class="container my-0 mx-auto py-4">
      <h1 class="text-5xl font-bold text-teal-700">List of Courses</h1>
      <section class="my-6">
        <CoursesItemComponent v-for="course in courseList" :key="course.id" :course="course"></CoursesItemComponent>
      </section>
      <PaginationComponent 
        :maxCountOnPage="10" 
        :allCount="courseList.length"></PaginationComponent>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  min-width: 340px;
}
</style>