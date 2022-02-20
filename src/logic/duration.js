export const convertDataIntoDuration = (data) => {
  const str = data.replace(/[A-Z]/g, '');
  if (str.length === 4) {
    const min = str.slice(0, 2);
    const sec = str.slice(2);
    return `${min}:${sec}`;
  }
  if (str.length === 3) {
    const min = str.slice(0, 1);
    const sec = str.slice(1);
    return `${min}:${sec}`;
  }
};
