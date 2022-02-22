export const convertDataIntoMonthDayYear = (data) => {
  const published = data.slice(0, 10).split('-');
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