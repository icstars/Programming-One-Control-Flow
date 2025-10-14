//Write a program that prints numbers from 1 to 20. For multiples of 3, print "Fizz," for multiples of 5, print "Buzz;" for multiples of both, print "FizzBuzz,"

for ( i = 1; i <= 20; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};
// write a program  that prints numbers by 3s=fizz, 5s=buzz and number that goes int both =fizbuzz up to 20

for (let i=1; i<=20; i++){
    if( i % 15 ===0){
        console.log('fizzbuzz');
    }else if (i%3 ===0){
            console.log('fizz');
        }else if (i%5 ===0){
            console.log ('buzz')
        }else (console.log (i))

        }
    
