import { DateTime } from "./luxon.js";

const currentDate = document.querySelector('#todays-date');

const setDateTime = () => {
  // generate date and time
  let newDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  currentDate.innerHTML = newDateTime;
}

export default setDateTime;
