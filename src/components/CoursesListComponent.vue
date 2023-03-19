<script setup>
import { ref, onMounted, computed } from 'vue';

// import Components
import PaginationComponent from '@/components/PaginationComponent.vue';
import CoursesItemComponent from '@/components/CoursesItemComponent.vue';

// Courses Service
import coursesService from '@/services/coursesService';
const CoursesService = new coursesService();

// Emits from Components
defineEmits(['nextPage', 'previousPage', 'changePage']);

// Ref data
const courseList = ref([]);
const page = ref(1);

// Methods
const getAllCourses = async () => {
  const list = await CoursesService.getCourses();
  courseList.value = list;
}

// Lifecycle hooks
onMounted(() => {
  getAllCourses();
});

// Computed values
const visibleCourses = computed(() => {
  const start = (page.value - 1) * 10;
  const end = page.value * 10;
  return [...courseList.value].slice(start, end);
});

const start = computed(() => (page.value - 1) * 10 + 1);
const end = computed(() => page.value * 10);

</script>

<template>
   <main class="bg-slate-100 box-content py-1">
    <div  class="container my-0 mx-auto py-4">
      <h1 class="text-5xl font-bold text-teal-700 my-4 ml-4">List of Courses</h1>
       <PaginationComponent
        :page="page"
        :start="start"
        :end="end"
        @next-page="page = page + 1"
        @previous-page="page = page - 1"
        @change-page="(p) => page = p"
        :maxCountOnPage="10" 
        :allCount="courseList.length"></PaginationComponent>

      <section class="my-6">
        <CoursesItemComponent v-for="(course, idx) in visibleCourses" :key="course.id" :course="course" :idx="idx"></CoursesItemComponent>
      </section>
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>