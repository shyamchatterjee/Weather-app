import { createContext, useEffect, useState } from "react";

export let Context = createContext(null)
export let ContextFuntion = ({children})=>{
      
      let [name,setName] = useState("")
      let [array,setArray] = useState({})
      let changeName = (e)=>{
             let inputcity = e.target.value
            
            let Name = inputcity.split(" ")
            console.log(Name)
          
            let newName =     Name.map((element)=>{
                   let fristCher =   element[0].toUpperCase()
                        let slicecher = element.slice(1)
                         return   fristCher + slicecher
                       
               })
             let city =   newName.join(" ")
             setName(city)
      }
     
     return  <Context.Provider value={{name,setName,changeName,array,setArray}} >
             {children}
       </Context.Provider>
}