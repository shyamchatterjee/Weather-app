import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"
import { api } from "../../contast/contast"

let useHooks = ()=>{
     let {name} = useContext(Context)
    let [array,setArray] = useState([])
        let getapi = ()=>{
         let fristCher = name[0].toUpperCase()
           let sliceCher = name.slice(1)
             let newName = fristCher+sliceCher
             console.log(sliceCher)
            api.get("/weather?city="+newName).then((value)=>{
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