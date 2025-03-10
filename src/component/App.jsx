import { useContext } from 'react'
import '../App.css'

import Result from './resultcomponent'
import Search from './Searchcomponent'
import { Context } from './context/context'
let App = ()=>{
   let replace = (str)=>{
          let array = str.split(" ")
          
        array.map((element)=>{
            let p =   element[0].toUpperCase()
                 let slicec = element.slice(1)
                let newstr = p + slicec
                console.log(newstr)

       })
       
   }
   replace("new")
    return <div className="container">
              <Search/>
              <Result/>
    </div>
}
export default App