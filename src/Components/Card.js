import React, { useEffect, useState } from "react";
import axios from "axios";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSnowflake } from "@fortawesome/free-solid-svg-icons";

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "c893de5b2dd01b81da0c7a9ed1c8f956",
};

const newWeather = async (location) => {
  const fetchData = async () => {
    const axiosData = await axios.get(
      `${api.base}weather?q=${location}&units=metric&APPID=${api.key}`
    );
    return axiosData.data;
  };

  const data = await fetchData();
  return data;
};

const Card = ({ location, index, setWeathers }) => {
  const [state, setState] = useState();
  const newDate = new Date();

  useEffect(() => {
    let subscribe = true;
    newWeather(location)
      .then((res) => (subscribe ? setState(res) : ""))
      .catch((err) => (subscribe ? console.log(err) : ""));

    return () => {
      subscribe = false;
    };
  }, [location]);

  // Events
  const handleClick = () => {
    setWeathers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <div className="group bg-sec rounded-lg overflow-hidden relative">
      {state && (
        <>
          <div className="flex justify-between items-center py-[10px] pl-[20px] bg-prim2">
            <p className="text-sm text-sec">
              {newDate.toLocaleString("en-us", { month: "short" })}{" "}
              {newDate.getDate()}
            </p>
            <div
              className="bg-prim2 w-[30px] h-[30px] hidden place-items-center rounded-sm cursor-pointer absolute right-[10px] duration-200 
              hover:brightness-75
              group-hover:grid"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <h1 className="px-[20px] pt-[20px] text-lg text-sec whitespace-nowrap">
            {state.name}
          </h1>
          <div className="px-[20px] flex items-center justify-between">
            <h1 className="text-[60px] font-semibold">
              {Math.round(state.main.temp)}°C
            </h1>
            <img
              src={`http://openweathermap.org/img/w/${state.weather[0].icon}.png`}
              alt=""
              className="w-[70px]"
            />
          </div>
          <p className="px-[20px] mb-[20px] text-sm text-sec">
            {state.weather[0].main}
          </p>
        </>
      )}

      {!state && (
        <div className="grid place-items-center h-[217.6px]">
          <div className="animate-pulse">
            <FontAwesomeIcon
              icon={faSnowflake}
              className="text-[40px] text-sec"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
