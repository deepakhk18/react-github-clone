import {useReducer,useEffect} from 'react'
import axios from 'axios'
const ACTION= {
    MAKE_REQUEST:'make request',
    GET_DATA:'get-data',
    ERROR:'error',
    UPDATE_HAS_NEXT_PAGE:'update-has-next-page'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

function reducer(state,action)
{
    switch(action.type) {
        case ACTION.MAKE_REQUEST:
            return {loading:true,jobs:[]}

        case ACTION.GET_DATA:
            return {...state,loading:false,jobs:action.payload.jobs}

        case ACTION.ERROR:
            return {...state,loading:false,error:action.payload.error,jobs:[]}
        case ACTION.UPDATE_HAS_NEXT_PAGE:
            return {...state,hasNextPage:action.payload.hasNextPage}

        default:
            return state 
    }
    

}
export default function useFetchJobs(params,page){
const [state,dispatch] =useReducer(reducer,{jobs:[],loading:true})

useEffect(()=>{
    const cancelToken =axios.CancelToken.source()
dispatch({type:ACTION.MAKE_REQUEST})
axios.get(BASE_URL,{
    cancelToken:cancelToken.token,
    paramas:{markdown:true,page:page,...params}
}).then(res=>{
    console.log(res.data);
    dispatch({type:ACTION.GET_DATA,payload:{jobs:res.data}})
    }).catch(e=>{
        if(axios.isCancel(e)) return 
        dispatch({type:ACTION.ERROR,payload:{error:e}})
    })
    return()=>{
        cancelToken.cancel()
    }
},[params,page])

    return state
}