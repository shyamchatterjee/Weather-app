import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { Context } from "./context/context";

let Search = ()=>{
  let {name,setName} = useContext(Context)
    return <div className="serach-container">
            <IoIosSearch/>
          <input type="text" name="" id="input-text" placeholder="Search" onChange={(e)=>{setName(e.target.value)}} />
    </div>
}
export default Search