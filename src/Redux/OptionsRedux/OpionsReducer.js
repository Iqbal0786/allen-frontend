import { GET_OPTION } from "./optionsConstant"

const initialState={
    optionData:{}
}
export const OptionReducer=(store=initialState,{type,payload})=>{
    console.log(payload)
     switch(type){
        
        case GET_OPTION: return {...store,optionData:{...payload}}
        default:return store
     }

}