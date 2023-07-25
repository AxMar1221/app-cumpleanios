import { data } from "../data";

export function getBirthdaysOfMonth() {
  const month = new Date();
  const currentMonth = month.getMonth() + 1;
  return data.filter((person) => {
    const birthdayMonth = parseInt(person.cumpleanios.split("-")[1]);
    return birthdayMonth === currentMonth;
  });
}

export function getBirthdaysOfDay() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  return data.filter((person) => {
    const [day, month] = person.cumpleanios.split("-");
    return parseInt(day) === currentDay && parseInt(month) === currentMonth;
  });
}
