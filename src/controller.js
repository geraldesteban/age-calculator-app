import { displayResult } from "./js/displayResults.js";
import { errorHandler } from "./js/errorHandling.js";

const btnCalculate = document.querySelector(".btn");

// Optional for input event listeners for day, month, year
/* 
const inputDayCalculate = document.querySelector("#year");
const inputMonthCalculate = document.querySelector("#month");
const inputYearCalculate = document.querySelector("#day");
 */

const init = () => {
  displayResult();

  errorHandler();
};

btnCalculate.addEventListener("click", function () {
  init();
});

// Optional for automatically calculating age when typing the day, month, and year
/* 
inputDayCalculate.addEventListener("input", () => {
  init();
});

inputMonthCalculate.addEventListener("input", () => {
  init();
});

inputYearCalculate.addEventListener("input", () => {
  init();
});
 */
