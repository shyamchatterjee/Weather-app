import { useContext } from "react"
import { Context } from "./context/context"
import useHooks from "./hooks/useHooks"
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

let Result = ()=>{
     let {array} = useHooks()
      console.log(array)
   return <> {array.map((element)=>{
     return <div className="wether-container">
    <img src= {element.image} width={300}     height={200}   alt="" />
              <p style={{fontSize:"55px"}}>{element.celcius}°C</p>
            
          <p style={{fontSize:"25px"}}>{element.city}</p>
              <div className="humidity-wind">
                  <div className="humidity">
                     <WiHumidity style={{fontSize:"28px"}}/>
                     <div className="humidity-text">
                     <p>{element.humidity}</p>
                     <p style={{fontSize:"10px"}}>Humidity</p>
                     </div>
                  </div>
                  <div className="wind">
                     <FaWind style={{fontSize:"20px"}}/>
                     <div className="wind-text">
                     <p>{element.wind}</p>
                     <p style={{fontSize:"10px"}}>Wind speed</p>
                     </div>
                  </div>
              </div>
    </div>
   })} </>
}
export default Result