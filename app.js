console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let number = 1; number <= 100; number++) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
  
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else
    if(i % 3 === 0 ){
        console.log('Fizz');
    }
    if (i % 5 === 0){
        console.log('Buzz');
    }
}

//excercise 3 section
console.log("\nEXERCISE 3:\n=========\n")
let number = 1;
while (number <= 100) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (number % 3 === 0) {
    console.log('FIZZ');
  } else if (number % 5 === 0) {
    console.log('BUZZ');
  }
  
  number++;
}

let m = 1;
do {
  if (m % 3 === 0 && m % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (m % 3 === 0) {
    console.log('FIZZ');
  } else if (m % 5 === 0) {
    console.log('BUZZ');
  }
  
  m++;
} while (m <= 100);

// excercise 4
console.log("\nEXERCISE 4:\n=========\n")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;

for (let i = 0; i >= n; i++){
    if (i == value){
        console.log("Found Value");
        found = true;
        break;
    }
}
if (found == false){
    console.log("Not Found")
}
