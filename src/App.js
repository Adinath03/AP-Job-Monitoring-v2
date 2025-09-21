import React, { useState } from "react";
import normalWeek from "./normalWeek";
import holidayMonday from "./holidayMonday";
import holidayTuesday from "./holidayTuesday";
import nextTuesday from "./nextTuesday";
import holidayWednesday from "./holidayWednesday";
import holidayThursday from "./holidayThursday";
import holidayFriday from "./holidayFriday";
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [searchDay, setSearchDay] = useState("Monday");
  const [holidayDay, setHolidayDay] = useState("No Holiday");

  const weekData = normalWeek;
  const holMonData = holidayMonday;
  const holTueData = holidayTuesday;
  const holNextTueData = nextTuesday;
  const holWedData = holidayWednesday;
  const holThuData = holidayThursday;
  const holFriData = holidayFriday;

  const getCardData = () => {
    switch (holidayDay) {
      case "No Holiday":
        return weekData;
      case "Next Week Monday":
        return holMonData;
      case "Next Week Tuesday":
        return holNextTueData;
      case "Tuesday":
        return holTueData;
      case "Wednesday":
        return holWedData;
      case "Thursday":
        return holThuData;
      case "Friday":
        return holFriData;
      default:
        return weekData;
    }
  };

  return (
    <>
      <div className="App">
        <Header />
      </div>

      <div className="App">
        <Form
          searchDay={searchDay}
          setSearchDay={setSearchDay}
          holidayDay={holidayDay}
          setHolidayDay={setHolidayDay}
        />
        <Card week={getCardData()} searchDay={searchDay} />
      </div>
    </>
  );
}

export default App;
