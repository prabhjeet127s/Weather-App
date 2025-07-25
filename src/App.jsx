import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

import OIP from "../src/assets/OIP(1).png";
import axios, { Axios } from "axios";


function App() {
  const API_KEY="fca3dcb9a2a887ac4b0b2bfb0981979a"
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [cityName, setCityName] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("01d");

  const fetchWeather=async ()=>{
    if(!search) return;
    setLoading(true)
    try {
     const { data } = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`);
     console.log(data);
     if(data.cod===200){
      setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setCityName(data.name);
        setWeatherIcon(data.weather[0].icon);

     }      
      
    } catch (error)
     {
      console.log(error)
       console.log(error);
      setCityName("city not found");
      setTemperature(null);
      setHumidity(null);
      setWindSpeed(null);
      setWeatherIcon("01d");

      
    }

  }
 
  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-800 to-gray-600 text-white">
        <h1 className="my-12 text-gray-200 font-semibold">Weather App</h1>
        {/* search bar & icon */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            
            className="flex-1 text-black outline-none px-2"
          />
          <FaSearch
            onClick={fetchWeather}
            className="text-gray-500 cursor-pointer"
          />
        </div>

        {/* weather icon */}
        <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt="Weather"
          className="w-20 h-20 mb-4"
        />

        {/* Temprature & CityName */}
        <h1 className="text-4xl font-bold mb-1">{loading
            ? "loading..."
            : temperature !== null
            ? `${temperature}°C`
            : "--"}
        </h1>
        <h2 className="text-2xl mt-2 font-semibold">
        </h2>

        {/* Humadity & Wind Speed */}
        <div className="w-full max-w-md mt-7 flex flex-col md:flex-row items-center justify-between md:items-start">
          <div className="flex flex-col items-center ">
            <WiHumidity className="text-3xl" />
            <span className="text-lg font-medium">
              80%
            </span>
            <p className="text-sm">Humidity</p>
          </div>
          <div className="flex flex-col items-center">
            <WiStrongWind className="text-3xl" />
            <span className="text-lg font-medium">
            100 km/h
            </span>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;