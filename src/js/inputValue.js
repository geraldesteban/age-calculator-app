export const inputYear = document.querySelector("#year");
export const inputMonth = document.querySelector("#month");
export const inputDay = document.querySelector("#day");

export const inputValue = function (
  yearValue = +inputYear.value,
  monthValue = +inputMonth.value,
  dayValue = +inputDay.value
) {
  return {
    yearVal: yearValue,
    monthVal: monthValue,
    dayVal: dayValue,
  };
};
