
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

function App() {
 
  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-500 to-black text-white">
        <h1 className="my-12 text-gray-200 font-semibold">Weather App</h1>
        {/* search bar & icon */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
          <input
            type="text"
            placeholder="Search"
            
            className="flex-1 text-black outline-none px-2"
          />
          <FaSearch
           
            className="text-gray-500 cursor-pointer"
          />
        </div>

        {/* weather icon */}
        <img
          src={``}
          alt=""
          className="w-20 h-20 mb-4"
        />

        {/* Temprature & CityName */}
        <h1 className="text-4xl font-bold mb-1">
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