/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */

import axios from "axios";
// import store from '@/store/'
// import router from '@/router/router'
// import { serialize } from '@/util/util'
// import { getToken } from '@/util/auth'
import { ElMessage } from "element-plus";
// import website from '@/config/website'
// import { Base64 } from 'js-base64'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

//默认超时时间
axios.defaults.timeout = 1200000;
//返回其他状态码
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest',
// }
// axios.defaults.validateStatus = function (status) {
//   return status >= 200 && status <= 500;
// };
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress 配置
// NProgress.configure({
//   showSpinner: false,
// })
//http request拦截
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(
  (config: any) => {
    //开启 progress bar
    // NProgress.start()
    const meta = config.meta || {};
    // const isToken = meta.isToken === false
    // config.headers['Authorization'] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`
    //让每个请求携带token
    // if (getToken() && !isToken) {
    //   config.headers[website.tokenHeader] = 'bearer ' + getToken()
    // }
    //headers中配置text请求
    if (config.text === true) {
      config.headers["Content-Type"] = "text/plain";
    }
    //headers中配置serialize为true开启序列化
    // if (config.method === 'post' && meta.isSerialize === true) {
    //   config.data = serialize(config.data)
    // }
    // let a=window.localStorage.getItem('onlyToken')
    // // let params=''
    // if(a!=null&&a!=undefined){
    //   //  params=JSON.parse(a)
    //    config.data.token=JSON.parse(a).value || ''
    // }else{
    //   config.data.token=''
    // }
    // config.data.token='JCMkIyQjMTYxODE5Njk2MTM2MSMxOTIuMTY4LjEwLjI4'
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
//http response 拦截
axios.interceptors.response.use(
  (res: any) => {
    //关闭 progress bar
    // NProgress.done()
    //获取状态码
    const status = res.status || res.data.code;
    // const statusWhiteList = website.statusWhiteList || []
    const message = res.data.msg || res.data.error_description || "未知错误";
    //如果在白名单里则自行catch逻辑处理
    // if (statusWhiteList.includes(status)) return Promise.reject(res)
    //如果是401则跳转到登录页面
    // if (status === 401) store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }))
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      ElMessage({
        message: message,
        type: "error",
      });
      return Promise.reject(new Error(message));
    }
    // if(res.data&&res.data.token){
    //   window.localStorage.setItem('onlyToken',JSON.stringify({value:res.data.token}))
    // }
    return res.data;
  },
  (error: any) => {
    // NProgress.done()
    if (error.response.status) {
      const status = error.response.status;
      if (status == 401) {
        //未登陆跳转登陆
        // router.replace({
        //   path: '/login',
        //   query: {
        //     redirect: router.currentRoute.fullPath,
        //   },
        // })
      } else if (status == 403) {
        //登陆过期清除token跳转登陆
        ElMessage({
          message: "登录过期，请重新登录",
          duration: 1000,
          type: "error",
        });
        localStorage.removeItem("token");
        setTimeout(() => {
          // router.replace({
          //   path: '/login',
          //   query: {
          //     redirect: router.currentRoute.fullPath,
          //   },
          // })
        }, 1000);
      } else if (status == 500 && error.response.data.code == 500) {
        ElMessage({
          message: error.response.data.msg,
          type: "error",
        });
      } else if (status > 500) {
        //拿到错误信息暴露出去
        // 预留获取错误码
        // let data=error.response.result.data
      }
      return Promise.reject(error.response);
    }
  }
);
export default axios;
