import { useContext } from "react"

import useHooks from "./hooks/useHooks"
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { useEffect } from "react";
import { Context } from "./context/context"
import { FaThermometerEmpty } from "react-icons/fa";
let Result = ()=>{
   
    let {array,name,isLoading,setLoading,eror,setEror} = useContext(Context)
         
console.log(array.length)


return   <div className="wether-container">
                
                 {eror==true?<h2>Server Eror</h2>:""}
                 {isLoading==true?<h2>...Loading</h2>:""}
                 <img  className={array?.name==undefined?"none": ""}      src="https://th.bing.com/th/id/R.00f6e747fe634f139979659f809c5eef?rik=%2bRy0AbbN4fFLHw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f963492.png&ehk=ucPcYex3Hw13xpXOyb111tV9zblqXxL4oxxE2pj223E%3d&risl=&pid=ImgRaw&r=0" width={200} height={170} alt="" />
              <p   className={array?.name==undefined?"none": ""}    style={{fontSize:"45px"}}>{array?.main?.temp+ "°C"}</p>
            
          <p   className={array?.name==undefined?"none": ""}    style={{fontSize:"25px"}}>{array?.name}</p>
              <div className="humidity-wind">
                  <div className="humidity"    >
                     <WiHumidity  className={array?.name==undefined?"none": ""}    style={{fontSize:"28px"}}/>
                     <div className="humidity-text">
                     <p   className={array?.name==undefined?"none": ""}   >{array?.main?.humidity+"%"}</p>
                     <p  className={array?.name==undefined?"none": ""}     style={{fontSize:"10px"}}>Humidity</p>
                     </div>
                  </div>
                  <div className="wind">
                     <FaWind   className={array?.name==undefined?"none": ""}   style={{fontSize:"20px"}}/>
                     <div className="wind-text">
                     <p  className={array?.name==undefined?"none": ""}   >{array?.wind?.speed + "Km/h"}</p>
                     <p    className={array?.name==undefined?"none": ""}   style={{fontSize:"10px"}}>Wind speed</p>
                     </div>
                  </div>
                
                
                 </div>
                 <div className="fells-text">
                    <FaThermometerEmpty className={array?.name==undefined?"none": ""} style={{fontSize:"22px"}}  />
                    <div className="wind-text">
                     <p  className={array?.name==undefined?"none": ""}   >{array?.main?.feels_like + "%"}</p>
                     <p    className={array?.name==undefined?"none": ""}   style={{fontSize:"10px"}}>Feels_like</p>
                     </div>
                     </div>
           
                 

        
    </div>

  
           
 
}
export default Result