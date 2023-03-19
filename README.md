# Tech Case for Genesis FrontEnd School

[![wakatime](https://wakatime.com/badge/user/7898c8e2-6b19-4825-b1c2-bbaaba8cace0/project/4a937523-e856-48d8-991e-6d8767c53197.svg)](https://wakatime.com/badge/user/7898c8e2-6b19-4825-b1c2-bbaaba8cace0/project/4a937523-e856-48d8-991e-6d8767c53197)

## Deploy 
  https://helen25sur.github.io/tech-task-genesis-frontend-school/
    

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
      |____ SkillsListComponent
      |____ LessonComponent
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
6. **FontAwesome**
7. **Hsl.js library for video**

## Project Description
This e-learning web application features two pages: the courses list page and the course detail page.

The courses page displays all the available courses, and hovering over each course item replaces the cover image  with a video preview. Clicking on a course item will redirect the user to the course detail page for more information.

On the course detail page, users can view the course's cover image, title, description, and all the lessons. Lessons can be of type 'video', 'article', or 'quiz_simulator', and some are locked. The course detail page includes a video player that allows the user to watch the video lessons and change the playback speed using keyboard controls. For articles, an image is shown under the lesson title, and for quizzes, a html-frame is displayed.

The application is designed to be responsive and adaptive, and includes a loading animation that appears before the full page is loaded.

## Desktop View
**Main Page | All Courses**

![Main Page | All Courses](https://user-images.githubusercontent.com/65970892/226207575-72ae1ef9-ed1c-450e-900e-bfdb6a7b7bb7.png)

**Course Detail Page**

![Course Detail Page](https://user-images.githubusercontent.com/65970892/226207709-75fb0485-0d43-42ca-bb27-2d4044172cf2.png)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
