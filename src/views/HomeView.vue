<template>
  <main>
  <h1>List of Courses</h1>
    <ul>
      <li v-for="course in courseList" :key="course.id">
        <h2>{{ course.title }}</h2>
        <img :src="course.previewImageLink + '/cover.webp'" :alt="course.title">
        <p>{{ course.lessonsCount }}</p>
        <ul>
          <li v-for="(skill, idx) in course.meta.skills" :key="idx">
            {{ skill }}
          </li>
        </ul>
        <p>{{ course.rating }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
import coursesService from '../services/coursesService';
const CoursesService = new coursesService();

export default {
  name: 'coursesPreview',
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

<style scoped>
</style>