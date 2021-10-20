import React from "react";

// Components
import Card from "./Card";

const WeatherCards = ({ weathers, setWeathers }) => {
  return (
    <div
      className="grid grid-cols-3 gap-3
      md:grid-cols-2
      sm:grid-cols-1"
    >
      {weathers.map((weather, index) => (
        <Card
          key={index}
          location={weather}
          index={index}
          setWeathers={setWeathers}
        />
      ))}
    </div>
  );
};

export default WeatherCards;
