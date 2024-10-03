function getTimeString(times) {
  const date = new Date(times * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}year ${month}month ${hours}hrs ${minutes}min ago`;
}

console.log(getTimeString(1672656000));
