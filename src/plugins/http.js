import request from "./request"

export function get(url="",data={}){
    return new Promise(function(resolve,reject){
        request.get(url,{params:data}).then(response=>{
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        });
    });
}

export function post(url="",data={}){
    return new Promise(function(resolve,reject){
        request.post(url,data).then(response=>{
            resolve(response.data)
        }).catch(error=>{
            reject(error);
        });
    });
}