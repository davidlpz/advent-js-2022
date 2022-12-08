function countHours(year, holidays) {
  return holidays.reduce((hours, holiday) => {
    const day = new Date(`${year}/${holiday}`).getDay();
    return ([1, 2, 3, 4, 5].includes(day)) ? hours + 2 : hours;
  }, 0);
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

const hours = countHours(year, holidays);
console.log(hours);