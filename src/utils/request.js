import fetch from 'dva/fetch';
import { notification } from 'antd';
import { routerRedux } from 'dva/router';
import store from '../index';
import { apiUrl } from './setting';

const codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // const errortext = codeMessage[response.status] || response.statusText;
  // notification.error({
  //   message: `请求错误 ${response.status}`,
  //   description: errortext,
  // });
  const error = new Error();
  error.name = response.status;
  error.response = response;
  throw error;
}

function handleResponse(response) {
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    return handleJSONResponse(response);
  } else if (contentType.includes('text/html')) {
    return handleTextResponse(response);
  } else {
    // Other response types as necessary. I haven't found a need for them yet though.
    throw new Error(`Sorry, content-type ${contentType} not supported`);
  }
}

function handleJSONResponse(response) {
  return response.json()
    .then((json) => {
      if (response.ok) {
        return Object.assign({}, {
          data: json,
          status: response.status,
          statusText: response.statusText,
        });
      } else {
        return Promise.reject(Object.assign({}, {
          data: json,
          status: response.status,
          statusText: response.statusText,
        }));
      }
    });
}
function handleTextResponse(response) {
  return response.text()
    .then((text) => {
      if (response.ok) {
        return Object.assign({}, {
          data: text,
          status: response.status,
          statusText: response.statusText,
        });
      } else {
        return Promise.reject({
          data: text,
          status: response.status,
          statusText: response.statusText,
        });
      }
    });
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  // API host information
  const requestUrl = apiUrl + url;
  console.info('[REQUEST]: ', requestUrl, url);
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  // console.info('[Request]->', newOptions);
  return fetch(requestUrl, newOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}
