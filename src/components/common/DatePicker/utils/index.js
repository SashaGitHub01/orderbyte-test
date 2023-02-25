/* eslint-disable no-plusplus */

export const weekDays = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

export const months = {
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

const CELLS_AMOUNT = 7 * 6;

const sundayWeekToMondayWeekDayMap = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};

export const calendarUtils = {
  getDayOfWeek(date) {
    const day = date.getDay();
    return sundayWeekToMondayWeekDayMap[day];
  },

  getMonthDaysCount(year, month) {
    const nextMonth = new Date(year, month + 1);
    nextMonth.setMinutes(-1);
    return nextMonth.getDate();
  },

  getCurrentMonthDays(year, month) {
    const days = [];
    const currentMonth = new Date(year, month, 1);
    const maxDay = this.getMonthDaysCount(
      currentMonth.getFullYear(),
      currentMonth.getMonth()
    );

    for (let i = 1; i <= maxDay; i++) {
      days.push({
        type: "current",
        year: currentMonth.getFullYear(),
        month: currentMonth.getMonth(),
        date: i,
      });
    }

    return days;
  },

  getPrevMonthDays(year, month) {
    const days = [];

    const currentMonthStart = new Date(year, month, 1);
    const prevMonthDaysAmount = this.getDayOfWeek(currentMonthStart);

    const prevMonthMaxDay = this.getMonthDaysCount(year, month - 1);

    const [cellYear, cellMonth] =
      month === 0 ? [year - 1, 11] : [year, month - 1];

    for (let i = prevMonthDaysAmount - 1; i >= 0; i--) {
      days.push({
        type: "prev",
        year: cellYear,
        month: cellMonth,
        date: prevMonthMaxDay - i,
      });
    }

    return days;
  },

  getNextMonthDays(year, month) {
    const days = [];

    const currentMonthStart = new Date(year, month, 1);
    const currentMonthDaysAmount = this.getMonthDaysCount(year, month);
    const prevMonthDaysAmount = this.getDayOfWeek(currentMonthStart);
    const nextMonthDaysAmount =
      CELLS_AMOUNT - currentMonthDaysAmount - prevMonthDaysAmount;

    const [cellYear, cellMonth] =
      month === 11 ? [year + 1, 0] : [year, month + 1];

    for (let i = 1; i <= nextMonthDaysAmount; i++) {
      days.push({
        type: "next",
        year: cellYear,
        month: cellMonth,
        date: i,
      });
    }

    return days;
  },
};
