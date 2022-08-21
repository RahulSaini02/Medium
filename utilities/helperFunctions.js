const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dateFormater = (date) => {
  let dt = new Date(date);
  let reqDt = months[dt.getMonth()] + " " + dt.getDate();
  return reqDt;
};

export const timeCalc = (num) => {
  let seconds = 60;
  let minutes = 60;
  let hours = 24;
};
