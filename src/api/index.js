import ajax from './ajax'
export const indexNav=()=>ajax({
    method:'get',
    url:'/indexCateModule'
})
export const indexContain=()=>ajax({
    method:'get',
    url:'/index'
})
export const cateNavDatas=()=>ajax({
    method:'get',
    url:'/cateNavDatas'
})
export const indexCacateListsteModule=()=>ajax({
    method:'get',
    url:'/indexCacateListsteModule'
})
export const SearchIndex=()=>ajax({
    method:'post',
    url:'/xhr/search/init.json'
})