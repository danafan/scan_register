import http from "./request.js";
let path = {  
  getUserInfo:'api/mobile/getuserinfo',                 //判断是否登录
  getAppKey:'api/mobile/getappkey',                     //获取appKey
  unFinishedPackage:'api/package/unfinishedpackage',    //判断是否有未完成的包裹
  addGoods:'api/package/pack',                          //添加商品
  packageReset:'api/package/reset',                     //重置
  packageInfo:'api/package/packageinfo',                //完成打包
  confirmPackage:'api/package/confirmPackage',          //提交打包
  ajaxWms:'ajax_wms',                                   //获取所有仓库
  ajaxSupplier:'api/package/ajaxsupplier',              //获取所有供应商
  printerList:'api/package/printer_list',               //打印机列表
  addAllGoods:'api/package/check_sku',                  //批量添加商品
  batchPack:'api/package/batch_pack',                   //批量打包
  quit:'api/mobile/quit',                               //退出登录
} 
export default {
  //判断是否登录
  getUserInfo(params) {
    return http.get(path.getUserInfo, params);
  },
  //获取appKey
  getAppKey(params) {
    return http.get(path.getAppKey, params);
  },
  //判断是否有未完成的包裹
  unFinishedPackage(params) {
    return http.get(path.unFinishedPackage, params);
  },
  //添加商品
  addGoods(params) {
    return http.get(path.addGoods, params);
  },
  //重置
  packageReset(params) {
    return http.get(path.packageReset, params);
  },
  //完成打包
  packageInfo(params) {
    return http.get(path.packageInfo, params);
  },
  //提交打包
  confirmPackage(params) {
    return http.get(path.confirmPackage, params);
  },
  //获取所有仓库
  ajaxWms(params) {
    return http.get(path.ajaxWms, params);
  },
  //获取所有供应商
  ajaxSupplier(params) {
    return http.get(path.ajaxSupplier, params);
  },
  //打印机列表
  printerList(params) {
    return http.get(path.printerList, params);
  },
  //批量添加商品
  addAllGoods(params) {
    return http.post(path.addAllGoods, params);
  },
  //批量打包
  batchPack(params) {
    return http.post(path.batchPack, params);
  },
  //退出登录
  quit(params) {
    return http.get(path.quit, params);
  },
};
