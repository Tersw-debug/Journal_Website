
const cache = new Map();
export function getCache(key){
    return  cache.get(key);
}


export function setCache(key,value){
    return cache.set(key,value);
}