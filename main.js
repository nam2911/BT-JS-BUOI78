var numbers = [];
// Thêm số
function addNumber() {
  var inputNumber = document.getElementById("inputNumber").value;
  numbers.push(parseInt(inputNumber));
  document.getElementById("numbersList").innerHTML += "<li>" + inputNumber + "</li>";
}

// Tổng số dương
function sumOfPositiveNumbers() {
  var positiveSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveSum += numbers[i];
    }
  }
  document.getElementById("positiveSum").innerHTML = positiveSum;
}

// Số lượng số dương
function countPositiveNumbers() {
  var positiveCount = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveCount++;
    }
  }
  document.getElementById("positiveCount").innerHTML = positiveCount;
}

// Số nhỏ nhất
function minimumNumber() {
  var minimum = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  document.getElementById("minimumNumber").innerHTML = minimum;
}

// Số dương cuối cùng
function lastEvenNumber() {
  var lastEven = -1;
  for (var i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
      lastEven = numbers[i];
      break;
    }
  }
  document.getElementById("lastEven").innerHTML = lastEven;
}

// Số dương nhỏ nhất
function minimumPositiveNumber() {
  var minPositive = -1;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && (minPositive === -1 || numbers[i] < minPositive)) {
      minPositive = numbers[i];
    }
  }
  document.getElementById("minimumPositiveNumber").innerHTML = minPositive;
}

// Đổi chỗ 2 vị trí
function swapElements() {
  const index1 = document.getElementById("index1").value;
  const index2 = document.getElementById("index2").value;

  if (index1 >= 0 && index1 < numbers.length && index2 >= 0 && index2 < numbers.length) {
    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
    displayNumbers();
  } else {
    alert("Vị trí không hợp lệ!");
  }
}

function displayNumbers() {
  var numbersList = document.getElementById("numbersList");
  numbersList.innerHTML = "";
  for (var i = 0; i <numbers.length; i++) {
    numbersList.innerHTML += "<li>" + numbers[i] + "</li>";
  }
}

// Sắp xếp tăng dần
function sortArrayAscending() {
  numbers.sort((a, b) => a - b);
  displayNumbers();
}

// Tìm số nguyên tố đầu tiên
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findFirstPrime() {
  var firstPrime = -1;
  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      firstPrime = numbers[i];
      break;
    }
  }
  document.getElementById("firstPrime").innerHTML = firstPrime;
}

// Đếm số nguyên
var realNumbers = [];

function addRealNumber() {
  var realNumber = parseFloat(document.getElementById("realNumber").value);
  if (!isNaN(realNumber)) {
    realNumbers.push(realNumber);
    document.getElementById("realNumbersList").innerHTML += "<li>" + realNumber + "</li>";
  } else {
    alert("Vui lòng nhập số thực!");
  }
}

function countIntegers() {
  var integerCount = 0;
  for (var i = 0; i < realNumbers.length; i++) {
    if (Number.isInteger(realNumbers[i])) {
      integerCount++;
    }
  }
  document.getElementById("integerCount").innerHTML = integerCount;
}

// So sánh số lượng số âm và số dương
function compareNumbers() {
  var positiveCount = 0;
  var negativeCount = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveCount++;
    } else if (numbers[i] < 0) {
      negativeCount++;
    }
  }
  if (positiveCount > negativeCount) {
    document.getElementById("comparisonResult").innerHTML = "Số dương > Số âm";
  } else if (positiveCount < negativeCount) {
    document.getElementById("comparisonResult").innerHTML = "Số âm > Số dương";
  } else {
    document.getElementById("comparisonResult").innerHTML = "Số âm = Số dương";
  }
}
