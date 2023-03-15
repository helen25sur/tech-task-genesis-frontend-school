<script setup>
import { computed } from 'vue';

const rating = defineProps(['rating']);

const listRateStar = computed(() => {
  const rateMax = 5;

  const list = [];
  const valueFullStar = 'fa-solid fa-star';
  const valueHalfStar = 'fa-solid fa-star-half-stroke';
  const valueEmptyStar = 'fa-regular fa-star';

  const countFullStar = Math.floor(rating['rating']);
  const diff = (rateMax - rating['rating']);
  const countHalfStar = rating['rating'] - countFullStar >= 0.5 ? 1 : 0;
  const countEmptyStar = diff - countHalfStar;

  for (let i = 0; i < countFullStar; i++) list.push(valueFullStar);
  if (countHalfStar) list.push(valueHalfStar);
  for (let i = 0; i < countEmptyStar; i++) list.push(valueEmptyStar);

  return list;
})
</script>

<template>
  <div class="flex mt-6" >
    <div v-for="(star, idx) in listRateStar" :key="idx">
      <font-awesome-icon :icon="star" class="text-orange-400 h-6 w-6 flex-shrink-0" />
    
    </div>
    <p>{{ rating.rating }}</p>
  </div>
</template>