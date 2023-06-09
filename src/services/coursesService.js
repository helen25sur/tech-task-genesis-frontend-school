// const reqHeaders = new Headers();
// reqHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MWE2ODllNy01MmJlLTQyMTgtOGRlZS1kNGNhN2NlNjQ2OGIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3NTU5MjgsImV4cCI6MTY3OTY1NTkyOH0.lzriIjuWW7MpK9QFWWSJdPm_wZZqPPccvVYL_wWgHXc");

// const requestOptions = {
//   method: 'GET',
//   headers: reqHeaders,
//   redirect: 'follow'
// };


export default class Courses {

  getCourses = async () => await fetch('https://testapi.io/api/Olena/preview-courses')
    .then(response => response.json())
    .then(result => result['courses'])
    .catch(error => console.log('error', error));

  getDetailCourse = async (id) => await fetch(`https://testapi.io/api/Olena/preview-courses/${id}`)
  .then(response => response.json())
  .catch(error => console.log('error', error));
}