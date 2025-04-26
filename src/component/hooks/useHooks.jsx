import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"


let useHooks = ()=>{
     let {name,array,setArray} = useContext(Context)
    
       let apiKey = `d8ffd0df1dfa702d12938225900ecd53`
        let getApi = ()=>{
           
           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`).then((value)=>{
                
                  setArray(value.data)
           })
           
           
         }
         
   
      let searchFuntion = (name)=>{
         if (name=="") {
             ""
         }else{

         
            getApi()
             
         }
        
      }
      

     return({getApi,searchFuntion})
}
export default useHooks