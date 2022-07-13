function timeConversion(s) {
  // Write your code here
  let hour = s.split(':')[0];
  const AMorPM = s.slice(-2);
  if (hour === '12') {
    hour = AMorPM === 'AM' ? '00' : '12';
  } else if (AMorPM === 'PM') {
    hour = Number(hour) + 12;
  }
  const timeWithoutHour = s.slice(2, -2);
  return `${hour}${timeWithoutHour}`;
}

const s = '11:05:45PM';

const print = timeConversion(s);
console.log(print);
