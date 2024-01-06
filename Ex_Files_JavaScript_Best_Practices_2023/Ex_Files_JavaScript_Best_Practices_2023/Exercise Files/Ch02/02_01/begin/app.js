'use strict';

const today = new Date();

function weekAgoDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
}
  // const date = new Date();
  // date.setDate(date.getDate() - 7);
  // return date;

const weekAgo = weekAgoDate();


console.log(today);
console.log(weekAgo);