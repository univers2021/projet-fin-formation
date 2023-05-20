import { AiOutlineSearch } from "react-icons/ai";
import {useState,useEffect}from 'react'
import Nclouds from "../imge/Nclouds.png";
import clear from "../imge/clear.png"
import rain from "../imge/rain.png"
import drizzel from "../imge/drizzel.png"
import mist from "../imge/mist.png"
import Nwindy from "../imge/Nwindy.png";
import pngwing from "../imge/pngwing.png";
import axios from "axios";
const Weather = () => {
    const [data,setData]=useState({
        // celicus : 10,
        // name: 'fes',
        // humidity: 10,
        // speed: 2,
        // image:Nclouds
    });
    const [name,setName] = useState("")
    const [city, setCity] = useState(null);
    useEffect(() => {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        position => {
          // Get city from latitude and longitude using a reverse geocoding API
          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=c2430d6c24b44fd4b9960d7962736bfd`)
            .then(response => response.json())
            .then(data => {
              // Extract city from API response and set it in state
              console.log(data);
              const city = data.results[0].components.region.split('-')[0];
              setCity(city);
            });
        },
        error => {
          console.error(error);
        }
      );
      console.log(city);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc304e7db0eb921f0f8b822a29f40db0&&units=metric`;
      axios.get(apiUrl)
      .then(res=>{
          let imagePath='';
          if(res.data.weather[0].main=="Coulds"){imagePath= Nclouds
        }else if(res.data.weather[0].main=="Clear"){imagePath= clear
      }else if(res.data.weather[0].main=="Rain"){imagePath= rain
    }else if(res.data.weather[0].main=="Drizzel"){imagePath= drizzel
    }else if(res.data.weather[0].main=="Mist"){imagePath= mist
    }else{ imagePath= Nclouds};
          
          setData({...data,
              celicus:res.data.main.temp,
              name:res.data.name,
              humidity:res.data.main.humidity,
              speed:res.data.wind.speed,
            image : imagePath})
      })
      .catch(err=>console.log(err))
    
    }, [city]);
    const handilClick=()=>{
        if(name !== '' ){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=dc304e7db0eb921f0f8b822a29f40db0&&units=metric`;
            axios.get(apiUrl)
            .then(res=>{
                let imagePath='';
                if(res.data.weather[0].main=="Coulds"){imagePath= Nclouds
              }else if(res.data.weather[0].main=="Clear"){imagePath= clear
            }else if(res.data.weather[0].main=="Rain"){imagePath= rain
          }else if(res.data.weather[0].main=="Drizzel"){imagePath= drizzel
          }else if(res.data.weather[0].main=="Mist"){imagePath= mist
          }else{ imagePath= Nclouds};
                
                setData({...data,
                    celicus:res.data.main.temp,
                    name:res.data.name,
                    humidity:res.data.main.humidity,
                    speed:res.data.wind.speed,
                  image : imagePath})
            })
            .catch(err=>console.log(err))

          }
        }
       
  return (
    <>
      {/* =======style for mobile==== */}
      <div className="bg-black w-full h-screen z-[-10] relative sm:hidden">
        <div className="flex flex-col  justify-between items-center bg-orange-500 w-[400px]  h-[500px] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] sm:hidden py-[10px]  rounded-[20px] absolute ">
          <div className="flex justify-around items-center w-full h-[30%]">
            <input
              type="text"
              placeholder="enter your city"
              className="w-[250px] h-10 rounded-[40px] px-5  " onChange={e=>setName(e.target.value)}/>
            <div className="bg-gray-200 text-[40px] text-gray-800 rounded-[50%]  "onClick={handilClick}>
              <AiOutlineSearch  />
            </div>
          </div>
          <div className="flex flex-col  items-center  w-full h-30">
            <img src={data.image} alt="" className="w-[50%]" />
            <div>
              <h3 className="text-[30px] text-gray-800">{data.name}</h3>
              <h3 className="text-[30px] text-gray-800">{data.celicus}°C</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-3">
              <img src={Nwindy} alt="" className="w-[20%]" />
              <div>
                <h3 className="text-[20px] text-gray-800">{data.speed} Km/h</h3>
                <h3 className="text-[20px] text-gray-800">wind</h3>
              </div>

              <div>
                <h3 className="text-[20px] text-gray-800">{data.humidity}%</h3>
                <h3 className="text-[20px] text-gray-800">humidity</h3>
              </div>
              <img src={pngwing} alt="" className="w-[20%] " />
            </div>
          </div>
        </div>
      </div>
      {/* =======style for laptop and tablit==== */}
      <div className="sm:bg-black sm:w-full sm:h-screen  relativ  ">
        <div className="sm:flex sm:flex-col sm:items-center sm:bg-orange-500 sm:w-[90%] sm:left-[50%] sm:translate-x-[-50%]  sm:h-[550px]  sm:absolute sm:bottom-[50%] sm:translate-y-[calc(50%+60px)] sm:rounded-3xl hidden">
          <div className=" sm:w-[500px] sm:h-[100px] sm:flex sm:justify-around sm:items-center">
            <input type="text" placeholder=" enter your city" className="sm:w-[400px] sm:h-[40px] sm:my-5 sm:rounded-[40px] px-[20px]" onChange = {e => setName(e.target.value)}/>
            <div className="bg-gray-200 w-[40px] h-[40px] rounded-[40px] "><AiOutlineSearch onClick={handilClick} size={30}/></div>
          </div>

          <div className="sm:flex sm:justify-between sm:items-center ">
            <div className="  sm:flex sm:flex-col sm:items-start sm:justify-between sm:ml-[10px]">
              
              <img src={data.image} alt=""  className="sm:w-[50%]"/>
              <h3 className="sm:text-gray-800 sm:text-[30px]">{data.name}</h3>
              <h3 className="sm:text-gray-800 sm:text-[30px]" > {Math.round(data.celicus)}°C</h3>
            </div>
            <div className=" sm:flex sm:flex-col sm:items-end smpy-5  sm:justify-between sm:mr-3" >
              
                <img src={Nwindy} alt="" className="sm:w-[20%]"/>
                <h1 className="sm:text-gray-800 sm:text-[30px]">{Math.round(data.speed)} Km/h</h1>
              
            
                <img src={pngwing} alt="" className="sm:w-[20%]" />
                <h1 className="sm:text-gray-800 sm:text-[30px]">{Math.round(data.humidity)}%</h1>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
