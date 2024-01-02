import React, { useState } from "react";
import normalWeek from "./normalWeek";
import holidayMonday from "./holidayMonday";
import holidayWednesday from "./holidayWednesday";
import holidayThursday from "./holidayThursday";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  // const [showSchedule, setShowSchedule] = useState(true);
  const [searchDay, setSearchDay] = useState("Monday");
  const [holidayDay, setHolidayDay] = useState("No Holiday");

  // function onWeekdaySubmit() {
  //   setShowSchedule(true);
  // }

  const weekData = normalWeek;
  const holMonData = holidayMonday;
  const holWedData = holidayWednesday;
  const holThuData = holidayThursday;
  console.log(weekData);

  const getCardData = () => {
    if (holidayDay === "No Holiday") {
      return weekData;
    } else if (holidayDay === "Next Week Monday") {
      return holMonData;
    } else if (holidayDay === "Wednesday") {
      return holWedData;
    } else {
      return holThuData;
    }
  };
  return (
    <div className="App">
      <Form
        searchDay={searchDay}
        setSearchDay={setSearchDay}
        holidayDay={holidayDay}
        setHolidayDay={setHolidayDay}
        // onWeekdaySubmit={onWeekdaySubmit}
      />
      <Card week={getCardData()} searchDay={searchDay} />
    </div>
  );
}

export default App;
