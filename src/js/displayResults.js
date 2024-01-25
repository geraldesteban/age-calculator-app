import { calculateAge } from "./calculateAge.js";
import { inputValue } from "./inputValue.js";

export const resultYears = document.querySelector(".result__years");
export const resultMonths = document.querySelector(".result__months");
export const resultDays = document.querySelector(".result__days");

export const displayResult = () => {
  const returnInputValue = inputValue();

  const returnCalculateAgeResult = calculateAge(
    returnInputValue.yearVal,
    returnInputValue.monthVal,
    returnInputValue.dayVal
  );

  if (
    returnInputValue.dayVal <= 31 &&
    returnInputValue.dayVal > 0 &&
    returnInputValue.monthVal <= 12 &&
    returnInputValue.monthVal > 0 &&
    returnInputValue.yearVal <= returnCalculateAgeResult.currentYearResult &&
    returnInputValue.yearVal > 0
  ) {
    resultYears.textContent =
      returnCalculateAgeResult.yearsResult === -1
        ? 0
        : returnCalculateAgeResult.yearsResult;
    resultMonths.textContent = returnCalculateAgeResult.monthsResult;
    resultDays.textContent = returnCalculateAgeResult.daysResult;
  }
};
