<script setup>
import { computed } from 'vue';

const dataPagination = defineProps(['page', 'start', 'end', 'maxCountOnPage', 'allCount']);

const countPages = computed(() => {
  return Math.ceil(dataPagination.allCount / dataPagination.maxCountOnPage);
});

const listLinkPages = computed(() => {
  const list = [];

  for (let i = 1; i <= countPages.value; i++) {
    const newLinkItem = {};
    newLinkItem.page = i;
    if (i === dataPagination.page) {
      newLinkItem.classes = 'z-10 bg-teal-600 font-extrabold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600';
    } else {
      newLinkItem.classes = 'font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0';
    }
    list.push(newLinkItem);
  }

  return list;
});

</script>

<template>
  <div class="flex items-center justify-center border-t border-gray-200 bg-white px-2 py-3 sm:px-6">
    <div class="sm:flex sm:flex-1 sm:items-center sm:justify-between">
     
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ start }}</span>
          to
          <span class="font-medium">{{ end }}</span>
          of
          <span class="font-medium">{{ allCount }}</span>
          courses
        </p>
      <div>
        <nav class="mt-4 sm:mt-0 isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a v-if="page > 1" @click="$emit('previousPage')" href="#"
            class=" relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </a>
          <a v-else-if="page === 1" 
            class=" relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 cursor-not-allowed">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </a>

          <a href="#" 
            v-for="link in listLinkPages" :key="link.page"
            @click="$emit('changePage', link.page)"
            class="relative inline-flex items-center px-4 py-3 text-sm  focus:z-20" :class="link.classes"
            aria-current="page">{{ link.page }}</a>

          <a v-if="page < countPages" @click="$emit('nextPage')" href="#"
            class="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </a>
          <a v-else class="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 cursor-not-allowed">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
