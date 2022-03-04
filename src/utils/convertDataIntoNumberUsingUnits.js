export const convertDataIntoNumberUsingUnits = (data) => {
  const num = Number(data);
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + 'K';
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  } else if (num < 900) {
    return num;
  }
};