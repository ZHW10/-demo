import {indexContain,indexCacateListsteModule} from '../api'
import {CATEGORYINDEX,DATAS} from './mutations-type'
export default{
    async getcategoryindex({ commit }){
        let result=await indexContain()
        commit(CATEGORYINDEX,result)
    },
    async getBuyindex({ commit },index){
        let result=await indexCacateListsteModule()
        commit(DATAS,result[index])
    },
}