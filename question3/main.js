// Tổng các số từ a -b
function sumNumberConsecutive(numberFrom, numberTo) {
  var sum = 0;
  for (var i = numberFrom; i <= numberTo; i++) {
    sum = sum + i;
  }
  return sum;
}

//
function doubleSumNumberConsecutiveWithCondition(
  numberFrom,
  numberTo,
  condition
) {
  let res = sumNumberConsecutive(numberFrom, numberTo);
  return condition ? res * 2 : res;
}
