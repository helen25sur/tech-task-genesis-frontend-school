<script setup>
defineProps(['skills']);
</script>

<template>
  <ul class="skills-list flex flex-wrap content-around">
    <li class="m-2 py-1 px-3 bg-teal-300 border border-solid border-teal-400 rounded-xl" v-for="(skill, idx) in skills"
      :key="idx">
      {{ skill }}
    </li>
  </ul>
</template>