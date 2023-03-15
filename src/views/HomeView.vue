<template>
  <main class="bg-slate-100 box-content">
    <div class="container my-0 mx-auto py-4">
      <h1 class="text-5xl font-bold text-teal-700">List of Courses</h1>
      <ul class="my-6">
        <li class="my-6 p-6 bg-slate-200 rounded-2xl border border-solid border-gray-300" v-for="course in courseList" :key="course.id">
          <h2 class="mb-3 text-2xl uppercase font-bold text-teal-500">{{ course.title }}</h2>
          <div class="description-course grid gap-6">
            <img class="rounded-xl" :src="course.previewImageLink + '/cover.webp'" :alt="course.title">
            <div class="detail">
              <p class="font-bold">Count of lessons: <span
                  class="inline-block ml-3 py-1 px-3 bg-orange-300 border border-solid border-orange-400 rounded-sm">{{
                    course.lessonsCount }}</span> </p>

              <ul class="skills-list flex flex-wrap content-around">
                <li class="m-2 py-1 px-3 bg-teal-300 border border-solid border-teal-400 rounded-xl"
                  v-for="(skill, idx) in course.meta.skills" :key="idx">
                  {{ skill }}
                </li>
              </ul>
              
              <div class="flex mt-6">
                <svg class="text-orange-400 h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>
                <svg class="text-orange-400 h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>
                <svg class="text-orange-400 h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>
                <svg class="text-orange-400 h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>
                <svg class="text-gray-500 h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd" />
                </svg>
                <p>{{ course.rating }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <PaginationComponent></PaginationComponent>
    </div>
  </main>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import coursesService from '../services/coursesService';
const CoursesService = new coursesService();

export default {
  name: 'coursesPreview',
  components: {
    PaginationComponent,
  },
  created() {
    this.getAllCourses();
  },
  data() {
    return {
      courseList: null,
    }
  },
  methods: {
    async getAllCourses() {
      const list = await CoursesService.getCourses();
      console.log(list);
      this.courseList = list;
    }
  }
}

</script>

<style scoped>.container {
  max-width: 1200px;
  min-width: 340px;
}

.description-course {
  grid-template-columns: 40% 1fr;
}

.skills-list {
  width: 100%;
}</style>