import {indexContain,indexNav} from '../api'
import {CATEGORYINDEX} from './mutations-type'
export default{
    async getcategoryindex({ commit }){
        let result=await indexContain()
        commit(CATEGORYINDEX,result)
    }
}