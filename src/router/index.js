import { createRouter, createWebHistory } from 'vue-router';
import CoursesList from '@/views/CoursesListView.vue';
import CourseDetail from '@/views/CourseDetailView.vue';
import NotFound from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    redirect: '/courses'
  },
  {
    path: '/courses',
    name: 'coursesPreview',
    component: CoursesList
  },
  {
    path: '/courses/:courseId',
    name: 'courseDetail',
    component: CourseDetail
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;