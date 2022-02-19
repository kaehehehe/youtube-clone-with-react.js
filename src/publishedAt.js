export const publishedAt = (data) => {
  const published = data.split('T')[0].split('-');
  const [publishedYear, publishedMonth, publishedDay] = published;
  const today = new Date();
  if (today.getFullYear() !== Number(publishedYear)) {
    const year = today.getFullYear() - publishedYear;
    return year === 1 ? `${year} year` : `${year} years`;
  }
  if (today.getMonth() + 1 !== Number(publishedMonth)) {
    const month = today.getMonth() + 1 - publishedMonth;
    return month === 1 ? `${month} month` : `${month} months`;
  }
  if (today.getDate() !== Number(publishedDay)) {
    const day = today.getDate() - publishedDay;
    if (day >= 7) {
      const week = Math.floor(day / 7);
      return week === 1 ? `${week} week` : `${week} weeks`;
    } else {
      return day === 1 ? `${day} day` : `${day} days`;
    }
  }
};