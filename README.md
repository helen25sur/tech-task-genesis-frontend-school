# Tech Case for Genesis FrontEnd School

[![wakatime](https://wakatime.com/badge/user/7898c8e2-6b19-4825-b1c2-bbaaba8cace0/project/4a937523-e856-48d8-991e-6d8767c53197.svg)](https://wakatime.com/badge/user/7898c8e2-6b19-4825-b1c2-bbaaba8cace0/project/4a937523-e856-48d8-991e-6d8767c53197)

## App Components & Views

```sh
| APP
  | CoursesListView
   -----------------
  |__ SpinnerComponent
  |__ CoursesListComponent
      |____ PaginationComponent
      |____ CoursesItemComponent
	        |____ VideoComponent
	        |____ RatingCourseComponent
	        |____ SkillsListComponent
  |__ FooterComponent
	  
  | CourseDetailView
   -----------------
  |__ SpinnerComponent
  |__ ButtonToMainComponent
  |__ CourseDetailComponent
      |____ RatingCourseComponent
      |____ VideoComponent
	  |____ SkillsListComponent
  |__ FooterComponent

  | NotFoundView
   -----------------
  |__ SpinnerComponent
  |__ ButtonToMainComponent
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
