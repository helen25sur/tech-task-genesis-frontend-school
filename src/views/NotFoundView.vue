<script setup>
import { ref, onMounted } from 'vue';

// import Components
import ButtonToMainComponent from '@/components/ButtonToMainComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

// Ref data
const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});

</script>

<template>
  <SpinnerComponent v-if="!isLoaded"></SpinnerComponent>
  <header v-if="isLoaded">
  </header>
  <main v-if="isLoaded">
    <div class="bg-gradient-to-r from-teal-800 to-green-900">
      <div class="w-7/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div class="bg-teal-50 shadow overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-6xl font-medium py-8"><span class="text-9xl font-bold text-green-700">404</span> <br><br>
              oops! Page not found</h1>
            <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have
              been moved or deleted.</p>
            <ButtonToMainComponent title="All Courses Page"></ButtonToMainComponent>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,300&display=swap')
</style>