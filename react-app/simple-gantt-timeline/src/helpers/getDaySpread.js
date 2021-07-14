// TODO: More resiliant day spread calculator for multiple timezone and change in day time
function getDaySpread(dateA, dateB) {
  const fromDate = new Date(dateA);
  const toDate = new Date(dateB);
  fromDate.setUTCHours(0);
  fromDate.setUTCMinutes(0);
  fromDate.setUTCSeconds(0);
  fromDate.setUTCMilliseconds(0);

  toDate.setUTCHours(0);
  toDate.setUTCMinutes(0);
  toDate.setUTCSeconds(0);
  toDate.setUTCMilliseconds(0);
  return Math.floor((toDate.getTime() - fromDate.getTime()) / 86400000);
};

export default getDaySpread;
