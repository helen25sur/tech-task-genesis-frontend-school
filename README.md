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

## Used Technologies
1. **JavaScript (HTML/CSS)**
2. **Vue.js**
3. **Vue Router**
4. **Vite.js**
5. **TailwindCSS**
6.  **FontAwesome**
7.  **Hsl.js library for video** (?)
8.   **Vitest** (?)

## Desktop View
**Main Page | All Courses**

![Main Page | All Courses](https://user-images.githubusercontent.com/65970892/225944577-82688d5d-2f89-422c-b5c4-536496910ce3.png)

**Course Detail Page**

![Course Detail Page](https://user-images.githubusercontent.com/65970892/225945176-1174aab0-a6b7-4573-9be4-b76a3604fb94.png)

**Page Not Found**

![404 page](https://user-images.githubusercontent.com/65970892/225945785-91e6a0cd-448c-4313-aa3b-a5df2ee5a9a7.png)

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
