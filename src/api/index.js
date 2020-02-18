import axios from 'axios'
export const indexNav=()=>axios({
    method:'get',
    url:'/indexCateModule'
})