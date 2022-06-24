import { GET_OPTION, GET_SCORE } from "./optionsConstant"

const initialState={
    optionData:{},
    score:0
}
export const OptionReducer=(store=initialState,{type,payload})=>{
    console.log(payload)
     switch(type){
        
        case GET_OPTION: return {...store,optionData:{...payload}}
        case GET_SCORE : return {...store, score:payload}
        default:return store
     }

}