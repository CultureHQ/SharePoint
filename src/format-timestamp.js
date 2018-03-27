const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const formatTimestamp = timestamp => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  hours = hours > 12 ? hours - 12 : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const meridian = hours >= 12 ? "PM" : "AM";

  return `${month} ${day}, ${year}, ${hours}:${minutes} ${meridian}`;
}

export default formatTimestamp;
