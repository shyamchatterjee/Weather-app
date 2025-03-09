import { createContext, useEffect, useState } from "react";

export let Context = createContext(null)
export let ContextFuntion = ({children})=>{
   
      let [name,setName] = useState("")
     
     return  <Context.Provider value={{name,setName}} >
             {children}
       </Context.Provider>
}