import React, { useState } from "react";

// Components
import Banner from "./Banner";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import WeatherCards from "./WeatherCards";

const App = () => {
  const [weathers, setWeathers] = useState(["philippines"]);

  const addWeather = (location) => {
    setWeathers([...weathers, location]);
  };

  return (
    <section>
      <Banner />
      <div className="container mt-[-155px] z-50">
        <SearchBox addWeather={addWeather} weathers={weathers} />
        <WeatherCards weathers={weathers} setWeathers={setWeathers} />
        <Footer />
      </div>
    </section>
  );
};

export default App;
