import { useContext } from 'react'
import '../App.css'

import Result from './resultcomponent'
import Search from './Searchcomponent'
import { Context } from './context/context'
let App = ()=>{

    return <div className="container">
              <Search/>
              <Result/>
    </div>
}
export default App