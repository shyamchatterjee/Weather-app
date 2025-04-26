import { useContext } from "react"

import useHooks from "./hooks/useHooks"
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { useEffect } from "react";
import { Context } from "./context/context"

let Result = ()=>{
   
    let {array,name} = useContext(Context)
         
console.log(array.length)


return   <div className="wether-container">
       
           
                    <img  className={array?.name==undefined?"none": ""}      src="https://cdn1.iconfinder.com/data/icons/weather-color-3/515/weather-05-512.png" width={100} height={100} alt="" />
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
                 <div className="wind-text">
                     <p  className={array?.name==undefined?"none": ""}   >{array?.main?.feels_like + "%"}</p>
                     <p    className={array?.name==undefined?"none": ""}   style={{fontSize:"10px"}}>Feels_like</p>
                     </div>
           
             

        
    </div>

  
           
 
}
export default Result