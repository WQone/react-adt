/**
 * axios初始化配置
 * --------------------------------------
 * 大部分接口以这个为基础
 */
import axios from 'axios';
// import { Message } from 'element-ui';
// import config from '../config';
// import router from '../router';

const instance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}/api/`,
  withCredentials: true,
  params: {},
  timeout: 25000, // 请求超时时间
});

instance.interceptors.request.use((request) => {
  const axiosRequest = {
    ...request,
    params: {
      ...request.params,
    },
    responseType: request.responseType,
  };
  return axiosRequest;
});

instance.interceptors.response.use(
  (response) => {
    const code = Number(response.data.respCode);
    if (code !== 0 && !isNaN(code)) {
      // Message({
      //   message: response.data.respMsg,
      //   type: 'error',
      // });
      // if (code === 99) {
      //   router.push('/401');
      // }
      // if (code === 98) {
      //   router.push('/login');
      // }
    }
    return response;
  },
  (error) => {
    // let message = error.message;
    // console.log(error);
    // if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    //   message = '请求超时';
    // }
    // Message({
    //   message,
    //   type: 'error',
    // });
    return Promise.reject(error);
  },
);
export default instance;
