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

export const convertDate = (data) => {
  const published = data.split('T')[0].split('-');
  let [publishedYear, publishedMonth, publishedDay] = published;

  switch (publishedMonth) {
    case '01':
      publishedMonth = 'Jan';
      break;
    case '02':
      publishedMonth = 'Feb';
      break;
    case '03':
      publishedMonth = 'Mar';
      break;
    case '04':
      publishedMonth = 'Apr';
      break;
    case '05':
      publishedMonth = 'May';
      break;
    case '06':
      publishedMonth = 'Jun';
      break;
    case '07':
      publishedMonth = 'Jul';
      break;
    case '08':
      publishedMonth = 'Aug';
      break;
    case '09':
      publishedMonth = 'Sep';
      break;
    case '10':
      publishedMonth = 'Oct';
      break;
    case '11':
      publishedMonth = 'Nov';
      break;
    case '12':
      publishedMonth = 'Dec';
      break;
    default:
      break;
  }
  return `${publishedMonth} ${publishedDay}, ${publishedYear}`;
};
