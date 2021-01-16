// Getting Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
}

// Getting Date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
}

// Current Day / Month / Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

// Final Dates
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Base URL
const base_url = 'https://api.rawg.io/api/';

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcomming Games
const upcomming_games = `games?dates=${currentDay},${nextYear}&ordering=-added&page_size=10`;

// New Games
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcommingGamesUrl = () => `${base_url}${upcomming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;