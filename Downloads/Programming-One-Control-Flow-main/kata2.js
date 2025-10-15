// making fizzbuzz from 1 to 30, 20 is not long enough to get fizzbuzz so i changed it.
for (let num = 1; num <= 30; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
