// Problem 1: Reverse a String
const reverseString = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return reversed;
};

// Problem 2: Count Vowels in a String
const countVowels = (string) => {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};

// Problem 3: Check for Palindrome
const isPalindrome = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  if (string === reversed) {
    return true;
  } else {
    return false;
  }
};

// Problem 4: Find the Maximum Number
const findMaxNumber = (num) => {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
};

// Problem 5: removes all duplicate numbers
const removeDuplicates = (numbers) => {
  let uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
  }

  return uniqueNumbers;
};

// Problem 6: Sum of All Numbers in an Array
const sumArray = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
};

// Problem 7: Find Even Numbers in an Array
const findEvenNumbers = (numbers) => {
  let evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
};

// Problem 8: Capitalize First Letter of Each Word
const capitalizeWords = (string) => {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
};

// Problem 9: Find the Factorial of a Number
const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

// Problem 10: Ping pong problem solve
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

