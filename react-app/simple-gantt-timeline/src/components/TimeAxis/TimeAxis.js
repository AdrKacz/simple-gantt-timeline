import './TimeAxis.css';

import getDaySpread from "../../helpers/getDaySpread";

const MONTH_MAP = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function TimeAxis({topOrigin, leftOrigin, maxSpread, dayWidth, dayOrigin, height}) {
  const months = [];
  const dates = [];
  const today = [];
  const weekends = [];

  Array(maxSpread + 1).fill(0).forEach((item, i) => {
    i -= 1; // Start one day earlier to catch Sunday weekend strip
    // Get Date
    const currentDay = new Date(dayOrigin.getTime() + i * 86400000)

    // Add Date
    dates.push(
      <div
        key={`date-${i}`}
        className={`time${(currentDay.getDay() === 5 || currentDay.getDay() === 6) ? " weekendday" : ""}`}
        style={{
          top: topOrigin + height,
          left: leftOrigin + dayWidth * i,
          width: dayWidth,
          height: height,
        }}>
        {currentDay.getDate()}
      </div>
    );

    // Add today if today
    if (getDaySpread(currentDay, new Date()) === 0) {
      today.push(
        <div
          key={`todaymarker-${i}`}
          className="todaymarker"
          style={{
            top: topOrigin + 2 * height,
            left: leftOrigin + dayWidth * i + dayWidth / 2,
          }}
        />
      );

      today.push(
        <div
          key={`todaystrip-${i}`}
          className="todaystrip"
          style={{
            top: topOrigin + 2 * height,
            left: leftOrigin + dayWidth * i + dayWidth / 2,
          }}
        />
      );
    };

    // Add weekends (if Saturday -5-)
    if (currentDay.getDay() === 5) {
      weekends.push(
        <div
          key={`weekends-${i}`}
          className="weekend"
          style={{
            top: topOrigin + height,
            left: leftOrigin + dayWidth * i,
            width: 2 * dayWidth,
          }}
        />
      )
    }

    // Add Month
    if (i === 0 || currentDay.getDate() === 1) {
      months.push(
        <div
          key={`month-${i}`}
          className="month"
          style={{
            top: topOrigin,
            left: leftOrigin + dayWidth * i,
            height: height,
          }}>
          {MONTH_MAP[currentDay.getMonth()]}
        </div>
      );
    }
  });

  return (
    <div className="TimeAxis">
      <div
        className="timebackground"
        style={{
          top: topOrigin + 2 * height,
          left: leftOrigin,
        }}
      />
      {weekends}
      {months}
      {dates}
      {today}
    </div>
  );
}

export default TimeAxis;
