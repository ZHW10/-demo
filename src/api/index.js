import ajax from './ajax'
export const indexNav=()=>ajax({
    method:'get',
    url:'/indexCateModule'
})
export const indexContain=()=>ajax({
    method:'get',
    url:'/index'
})