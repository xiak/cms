import { isUrl } from '../utils/utils';

const menuData = [{
  name: '工作台',
  icon: 'dashboard',
  path: 'home',
  children: [{
    name: '校长',
    path: 'president',
    authority: 'President',
  }, {
    name: '教师',
    path: 'teacher',
    authority: 'Teacher',
  }, {
    name: '学生',
    path: 'student',
    authority: 'Student',
  }],
}, {
  name: '课程',
  icon: 'form',
  path: 'course',
  authority: 'Guest',
  children: [{
    name: '课程管理',
    path: 'manage',
  }, {
    name: '课程详情',
    path: 'details',
    children: [{
      name: '课程报名表',
      path: ':id',
    }],
  }, {
    name: '课程发布',
    path: 'publish',
    authority: ['President', 'Teacher'],
  }, {
    name: '更新课程',
    path: 'edit',
    authority: ['President', 'Teacher'],
  }, {
    name: '课程消费',
    path: 'consume',
    authority: 'Student',
  }, {
    name: '课程介绍',
    path: 'intro',
    authority: ['Guest', 'Student', 'Teacher', 'President'],
    children: [{
      name: '课程信息',
      path: ':id',
    }],
  }, {
    name: '课程报名',
    path: 'enroll',
    authority: ['Guest', 'Student', 'Teacher'],
    children: [{
      name: '报名或更新',
      path: ':action',
      children: [{
        name: '报名信息',
        path: ':id',
      }],
    }],
  }, {
    name: '报名状态',
    path: 'enroll-ok',
    children: [{
      name: '报名成功',
      path: ':id',
    }],
  }, {
    name: '报名状态',
    path: 'enroll-err',
    children: [{
      name: '报名失败',
      path: ':id',
    }],
  }],
}, {
  name: '账户',
  icon: 'user',
  path: 'user',
  authority: 'Guest',
  children: [{
    name: '登录',
    path: 'login',
  }, {
    name: '注册',
    path: 'register',
  }, {
    name: '注册结果',
    path: 'register-result',
  }],
}, {
  name: '管理',
  icon: 'user',
  path: 'manage',
  authority: 'President',
  children: [{
    name: '教师',
    path: 'teacher',
  }, {
    name: '学生',
    path: 'student',
  }, {
    name: '课程',
    path: 'course',
  }],
}, {
  name: '详情',
  icon: 'user',
  path: 'profile',
  authority: ['President', 'Teacher'],
  children: [{
    name: '课程详情',
    path: 'course',
  }],
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
