import {get,post} from "@/plugins/http.js";
/**
 * 用户登录
 * @param {*} data 
 * @returns 
 */
export function user_login(data){
   return get("user/login",data);
}


