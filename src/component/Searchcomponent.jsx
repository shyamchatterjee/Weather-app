import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { Context } from "./context/context";
import useHooks from "./hooks/useHooks";

let Search = ()=>{
  let {name,setName,changeName} = useContext(Context)
   let {searchFuntion} =useHooks()
      return   <form    className="form"  onSubmit={(e)=>    { e.preventDefault()  , searchFuntion(name)}}>
          <div className="serach-container">
            <IoIosSearch style={{marginLeft:"1rem"}}  />
          <input type="text" name="" id="input-text" placeholder="Search"  onChange={changeName} />
          </div>
           <button ><img src="https://cdn0.iconfinder.com/data/icons/cloud-line-filled-creative/154/Cloud_find_search_weather-512.png" height="50px" width="50px" alt=""  /></button> 
           </form>
           
    
}
export default Search