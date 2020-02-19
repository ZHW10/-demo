import {CATEGORYINDEX} from './mutations-type'
export default{
    [CATEGORYINDEX](state,categoryIndex){
        state.categoryIndex=categoryIndex
        // console.log(state.categoryIndex)
    }
}