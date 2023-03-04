import axios from "./index";

//中间处理
export function middleWare(params, type) {
  // for (let k in params) {
  //   if (typeof params[k] == "string" && params[k] != "") {
  //     //去掉两边空格
  //     params[k] = params[k].toString().replace(/(^\s*)|(\s*$)/g,"");
  //     //去掉#
  //     params[k] = params[k].toString().replace(/[#]/g, "");
  //   }
  // }
  //组织参数
  var req = { ...params};
  // var req = { ...params, ...{ admin_id: "8318" } };
  var get_arr = [];
  //post请求参数
  var form = new FormData();
  for (let key in req) {
    form.append(key, req[key]);
    get_arr.push(`${key}=${req[key]}`);
  }
  //get请求参数
  var get_str = get_arr.join("&");
  return type == "get" ? get_str : form;
}
export default {
  post(path, params = {}) {
    var form = middleWare(params, "post");
    return axios.post(`${path}`, form);
  },
  get(path, params = {}) {
    var str = middleWare(params, "get");
    return axios.get(`${path}?${str}`);
  }
};
