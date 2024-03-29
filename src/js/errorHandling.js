import { calculateAge } from "./calculateAge.js";
import { inputValue } from "./inputValue.js";

export const resultYears = document.querySelector(".result__years");
export const resultMonths = document.querySelector(".result__months");
export const resultDays = document.querySelector(".result__days");

export const errorDay = document.querySelector(".error__day");
export const errorMonth = document.querySelector(".error__month");
export const errorYear = document.querySelector(".error__year");

export const dayError = document.querySelector(".day__error");
export const monthError = document.querySelector(".month__error");
export const yearError = document.querySelector(".year__error");

export const day = document.querySelector(".day");
export const month = document.querySelector(".month");
export const year = document.querySelector(".year");

export const defaultValue = () => {
  resultYears.textContent = "- -";
  resultMonths.textContent = "- -";
  resultDays.textContent = "- -";
};

// Error handler
export const errorHandler = () => {
  // Input value result
  const returnInputValue = inputValue();

  // Calculated age result
  const returnCalculateAgeResult = calculateAge(
    returnInputValue.yearVal,
    returnInputValue.monthVal,
    returnInputValue.dayVal
  );

  // Error handling day
  if (returnInputValue.dayVal <= 31 && returnInputValue.dayVal > 0) {
    errorDay.classList.add("opacity-0");
    errorDay.textContent = "";
    dayError.classList.remove("border-red-500");
    day.classList.remove("text-red-500");
  } else if (returnInputValue.dayVal === 0) {
    defaultValue();
    errorDay.textContent = "This field is required";
    dayError.classList.add("border-red-500");
    day.classList.add("text-red-500");
    errorDay.classList.remove("opacity-0");
  } else {
    errorDay.textContent = "Must be a valid day";
    dayError.classList.add("border-red-500");
    day.classList.add("text-red-500");
    errorDay.classList.remove("opacity-0");
  }

  // Error handling month
  if (returnInputValue.monthVal <= 12 && returnInputValue.monthVal > 0) {
    errorMonth.classList.add("opacity-0");
    errorMonth.textContent = "";
    monthError.classList.remove("border-red-500");
    month.classList.remove("text-red-500");
  } else if (returnInputValue.monthVal === 0) {
    defaultValue();
    errorMonth.textContent = "This field is required";
    monthError.classList.add("border-red-500");
    month.classList.add("text-red-500");
    errorMonth.classList.remove("opacity-0");
  } else {
    errorMonth.textContent = "Must be a valid month";
    monthError.classList.add("border-red-500");
    month.classList.add("text-red-500");
    errorMonth.classList.remove("opacity-0");
  }

  // Error handling year
  if (
    returnInputValue.yearVal <= returnCalculateAgeResult.currentYearResult &&
    returnInputValue.yearVal > 0
  ) {
    errorYear.classList.add("opacity-0");
    errorYear.textContent = "";
    yearError.classList.remove("border-red-500");
    year.classList.remove("text-red-500");
  } else if (returnInputValue.yearVal === 0) {
    defaultValue();
    errorYear.textContent = "This field is required";
    yearError.classList.add("border-red-500");
    year.classList.add("text-red-500");
    errorYear.classList.remove("opacity-0");
  } else {
    errorYear.textContent = "Must be in the past";
    yearError.classList.add("border-red-500");
    year.classList.add("text-red-500");
    errorYear.classList.remove("opacity-0");
  }

  // Check if valid date
  if (
    returnCalculateAgeResult.yearsResult < 0 ||
    (returnInputValue.dayVal === returnCalculateAgeResult.currentDayResult &&
      returnInputValue.monthVal - 1 ===
        returnCalculateAgeResult.currentMonthResult)
  ) {
    errorDay.textContent = "Must be a valid date";
    errorDay.classList.remove("opacity-0");
    errorYear.classList.add("opacity-0");
    defaultValue();
  }
};
