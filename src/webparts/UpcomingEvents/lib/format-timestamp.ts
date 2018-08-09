const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();

  const meridian = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;

  let minutes = date.getMinutes();
  let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes.toString();

  return `${month} ${day}, ${year}, ${hours}:${minutesDisplay} ${meridian}`;
};

export default formatTimestamp;
