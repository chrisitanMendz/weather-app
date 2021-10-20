import React, { useState } from "react";

// Data
import countries from "../data/countries.json";

const SearchBox = ({ addWeather, weathers }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleKeyup = async (e) => {
    const filterCountry = countries.filter(
      (country) =>
        country.name.substring(0, input.length).toLowerCase() ===
        input.toLowerCase()
    );

    if (input.length > 0) {
      setList(filterCountry);
    } else {
      setList([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filterCountry = countries.filter(
      (country) => country.name.toLowerCase() === input.toLowerCase()
    );

    if (filterCountry.length > 0) {
      if (weathers.includes(input)) {
        alert(`"${input}" is already exist`);
      } else {
        addWeather(input);
        setInput("");
      }
    } else {
      alert(`"${input}" is not a country`);
    }
  };

  const handleBlur = () => {
    setList([]);
  };

  const handleClick = () => {
    const filterCountry = countries.filter(
      (country) =>
        country.name.substring(0, input.length).toLowerCase() ===
        input.toLowerCase()
    );

    if (input.length > 0) {
      setList(filterCountry);
    } else {
      setList([]);
    }
  };

  const handleMouseDown = (e) => {
    const txt = e.target.innerText;
    const text = txt.toLowerCase();

    if (weathers.includes(text)) {
      alert(`"${text}" is already exist`);
    } else {
      addWeather(text);
      setInput("");
    }
  };

  return (
    <div className="relative">
      <form
        className="flex items-center py-[5px] pl-[20px] pr-[5px] mb-[40px] bg-prim rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Add location..."
          className="flex-1 bg-transparent py-[10px] text-sm outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKeyup}
          onBlur={handleBlur}
          onClick={handleClick}
        />
        <button
          className="px-[40px] py-[10px] bg-blue-400 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>

      {list.length !== 0 && (
        <ul className="absolute top-[53px] w-full p-3 pb-0 z-50 max-h-[400px] rounded-md overflow-y-auto bg-[#ffffffa1] ulCountry">
          {list.map((each) => (
            <li
              key={each.code}
              className=" text-sec py-2 px-[20px] bg-sec mb-3 rounded-md cursor-pointer hover:bg-prim"
              onMouseDown={handleMouseDown}
            >
              {each.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
