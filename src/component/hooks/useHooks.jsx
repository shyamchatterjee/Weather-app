import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"
import { api } from "../../contast/contast"

let useHooks = ()=>{
     let {name} = useContext(Context)
    let [array,setArray] = useState([])
        let getapi = ()=>{
            api.get("/weather?city="+name).then((value)=>{
                     setArray(value.data)
            })
         }
       useEffect(()=>{
          if (name=="") {
                ""
          }else{

          
             getapi()
          }
       },[name])
      
      

     return({array})
}
export default useHooks