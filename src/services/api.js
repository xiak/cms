import { stringify } from 'qs';
import request from '../utils/request';

export async function queryProjectNotice() {
  return request('/project/notice');
}

export async function queryActivities() {
  return request('/activities');
}

export async function queryRule(params) {
  return request(`/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/fake_chart_data');
}

export async function queryTags() {
  return request('/tags');
}

export async function queryBasicProfile() {
  return request('/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/fake_list?${stringify(params)}`);
}

export async function addCourse(params) {
  return request('/course/add', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function enrollCourse(params) {
  return request('/course/enroll', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function editCourse(params) {
  return request('/course/edit', {
    method: 'PUT',
    body: params,
  });
}

export async function deleteCourse(params) {
  return request(`/course/id/${params}`, {
    method: 'DELETE',
  });
}

export async function queryCourseList(params) {
  return request(`/course?${stringify(params)}`);
}

export async function queryOwnCourseList(params) {
  return request(`/course/own?${stringify(params)}`);
}

export async function getCourseById(params) {
  return request(`/course/id/${params}`);
}

export async function getCourseEnrollDetails(params) {
  return request(`/course/enroll/details?course=${params.id}&perpage=${params.perpage}&page=${params.page}`);
}

export async function getEnrollById(params) {
  return request(`/course/enroll/id/${params}`);
}

export async function getEnrolls() {
  return request('/course/enroll');
}

export async function editEnroll(params) {
  return request('/course/enroll/edit/', {
    method: 'PUT',
    body: params,
  });
}

export async function deleteEnroll(params) {
  return request(`/course/enroll/delete?course=${params.courseId}&user=${params.userId}`, {
    method: 'DELETE',
  });
}

export async function getEnrollStatus(params) {
  return request(`/course/enroll/status/${params}`);
}

export async function getEnrollCourses() {
  return request('/course/enroll/cs');
}

export async function getEnrollCourseIds() {
  return request('/course/enroll/cids');
}

export async function userLogin(params) {
  return request('/login', {
    method: 'POST',
    body: params,
  });
}

export async function userLogout() {
  return request('/logout');
}

export async function fakeRegister(params) {
  console.info('fakeRegister: ', params);
  return request('/register', {
    method: 'POST',
    body: params,
  });
}

export async function registerTeacher(params) {
  return request('/register/teacher', {
    method: 'POST',
    body: params,
  });
}

export async function deleteTeacher(params) {
  return request(`/admin/users?user=${params.userId}`, {
    method: 'DELETE',
  });
}

export async function queryNotices() {
  return request('/notices');
}

export async function queryUser(params) {
  return request(`/user/search?perpage=${params.perpage}&page=${params.page}`);
}

export async function queryTeacher(params) {
  return request(`/user/teacher?perpage=${params.perpage}&page=${params.page}`);
}

export async function queryStudent(params) {
  return request(`/user/student?perpage=${params.perpage}&page=${params.page}`);
}

export async function queryCourse(params) {
  return request(`/course/search?perpage=${params.perpage}&page=${params.page}`);
}

export async function queryStatusCourse(params) {
  if (params.status) {
    return request(`/course/search${params.status}?perpage=${params.perpage}&page=${params.page}`);
  } else {
    return request(`/course/search?perpage=${params.perpage}&page=${params.page}`);
  }
}

export async function queryStudentEnrolls(params) {
  return request(`/course/enroll/student?perpage=${params.perpage}&page=${params.page}`);
}

