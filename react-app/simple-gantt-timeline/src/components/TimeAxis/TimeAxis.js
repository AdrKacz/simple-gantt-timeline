import './TimeAxis.css';

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

  Array(maxSpread).fill(0).forEach((item, i) => {
    // Get Date
    const currentDay = new Date(dayOrigin.getTime() + i * 86400000)

    // Add Date
    dates.push(
      <div
        key={i}
        className="time"
        style={{
          top: topOrigin + height,
          left: leftOrigin + dayWidth * i,
          width: dayWidth,
          height: height,
        }}>
        {currentDay.getDate()}
      </div>
    );

    // Add Month
    if (i === 0 || currentDay.getDate() === 1) {
      months.push(
        <div
          key={i}
          className="month"
          style={{
            top: topOrigin,
            left: leftOrigin + dayWidth * i,
            width: dayWidth,
            height: height,
          }}>
          {MONTH_MAP[currentDay.getMonth()]}
        </div>
      );
    }
  });

  return (
    <div className="TimeAxis">
      {months}
      {dates}
    </div>
  );
}

export default TimeAxis;
