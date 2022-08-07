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
