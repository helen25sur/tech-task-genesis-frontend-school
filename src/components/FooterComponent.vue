<template>
  <footer class="py-4 bg-gradient-to-b from-teal-900 to-teal-700 text-white">
    <div class="container my-0 mx-auto py-8 text-center">
      <div class="contacts">
        <p class="font-semibold text-lg">Developed by <span class="text-teal-100 text-xl">Olena Surilova</span></p>
        <div class="mx-auto my-6 links flex sm:w-96 w-48 justify-evenly">
          <a class="my-cv inline-block py-2 px-6 border-2 font-medium border-solid border-teal-300 rounded-xl hover:bg-teal-900 hover:text-teal-100 transition-all" 
            href="https://drive.google.com/file/d/1AM3N2spNyihfwj5wmAjZ2MhAiO1eoV9k/view?usp=sharing" target="_blank">My
            CV</a>
          <a class="inline-block py-2 px-6 border-2 font-medium border-solid border-teal-300 rounded-xl hover:bg-teal-900 hover:text-teal-100 transition-all"
            href="https://www.linkedin.com/in/olena-surilova-8aa66b122/" target="_blank">LinkedIn</a>
          <a class="inline-block py-2 px-6 border-2 font-medium border-solid border-teal-300 rounded-xl hover:bg-teal-900 hover:text-teal-100 transition-all"
            href="https://github.com/helen25sur" target="_blank">GitHub</a>

        </div>
      </div>
      <div class="logo-block ">
        <img class="block my-4 mx-auto" src="/images/logo.webp" alt="School logo">
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media screen and (max-width: 650px) {
  .links {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 100%;
  }
  
}
</style>