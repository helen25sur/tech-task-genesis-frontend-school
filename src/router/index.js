import { createRouter, createWebHistory } from 'vue-router';
import CoursesList from '../views/CoursesListView.vue';
import CourseDetail from '../views/CourseDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'coursesPreview',
      component: CoursesList
    },
    {
      path: '/courses/:courseId',
      name: 'courseDetail',
      component: CourseDetail
    }
  ],
});

export default router;
