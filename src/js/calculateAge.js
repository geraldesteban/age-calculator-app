export const calculateAge = function (year, month, day) {
  const birthDate = new Date(year, month - 1, day);

  // Store birthyear, birthmonth, birthday
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  // Store current year, current month, current day
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;

  // Get accurate days
  let days = currentDay - birthDay;
  if (days < 0) {
    months--;
    days += new Date(currentYear, currentMonth, 0).getDate();
  }

  // Get accurate months
  months < 0 ? (months += 12) : months;

  // Get accurate years
  currentMonth >= birthMonth && birthDay <= currentDay ? years : --years;

  return {
    yearsResult: years,
    monthsResult: months,
    daysResult: days,

    currentYearResult: currentYear,
    currentMonthResult: currentMonth,
    currentDayResult: currentDay,
  };
};
