import {CATEGORYINDEX,DATAS,DATASNAV} from './mutations-type'
export default{
    [CATEGORYINDEX](state,categoryIndex){
        state.categoryIndex=categoryIndex
        // console.log(state.categoryIndex)
    },
    [DATAS](state,datas){
        state.Datas=datas
    },
    [DATASNAV](state,DatasNav){
        state.DatasNav=DatasNav
    }
}