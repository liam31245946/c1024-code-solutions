'use strict';
function getRangeReport(start, end) {
  const average = (start + end) / 2;
  return average;
}
function getRangeReport1(start, end) {
  const rangeStart = Math.min(start, end);
  const rangeEnd = Math.max(start, end);
  const evenArray = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;
}
function getRangeReport2(start, end) {
  const rangeStart = Math.min(start, end);
  const rangeEnd = Math.max(start, end);
  const oddArray = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i % 2 !== 0) {
      oddArray.push(i);
    }
  }
  return oddArray;
}
function getRangeReport3(start, end) {
  const rangeStart = Math.min(start, end);
  const rangeEnd = Math.max(start, end);
  const rangeArray = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}
function getRangeReport4(start, end) {
  const rangeStart = Math.min(start, end);
  const rangeEnd = Math.max(start, end);
  const totalArray = [];
  let total = 0;
  for (let i = rangeStart; i <= rangeEnd; i++) {
    total += i;
    totalArray.push(total);
  }
  return totalArray;
}
const average = getRangeReport(1, 10);
console.log('average', average);
const evens = getRangeReport1(1, 10);
console.log('even', evens);
const odd = getRangeReport2(1, 10);
console.log('odd', odd);
const range = getRangeReport3(1, 10);
console.log('range', range);
const total = getRangeReport4(1, 10);
console.log('total', total);
function getRangeReportFinal(start, end) {
  const rangeStart = Math.min(start, end);
  const rangeEnd = Math.max(start, end);
  const array = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    array.push(i);
  }
  const average = (rangeStart + rangeEnd) / 2;
  array.push(average);
  return {
    average: number,
    event: number,
    odd: number,
    range: number,
    total: number,
  };
}
getRangeReportFinal(1, 10);
