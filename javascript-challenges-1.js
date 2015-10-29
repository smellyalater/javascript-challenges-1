

//Javascript Challenges #1

//1. Log to the console the value of x * 9 for each number between 0 and 100. 

for (var baseNumber = 0; baseNumber <= 100; baseNumber++) {
 console.log(baseNumber + " * 9 = " + (baseNumber * 9));
}

// 2. Assume we have a class with Lucille, Michael and George Michael. For each name, log to the console NAME is in the class. The console should look like this:
// Lucille is in the class
// Michael is in the class.
// George Michael is in the class

var theClass = " is in the class.";
var studentNames;
studentNames = ["Lucille", "Micheal", "George Micheal"];
console.log(studentNames[0] + theClass);
console.log(studentNames[1] + theClass);
console.log(studentNames[2] + theClass);



// 3. FizzBuzz!

// Write a program that logs to the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.  The output should look like this:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz


//I had to cheat to figure out that '%' was a thing.
for (var baseNumber = 0; baseNumber <= 100 ; baseNumber++) {
	if ( (baseNumber % 3 === 0) && (baseNumber % 5 === 0) ) {
		console.log("fizzbizz");
	}

	else if (baseNumber % 3 === 0) {
		console.log("fizz");
	}

	else if (baseNumber % 5 ===0) {
		console.log("bizz");
	}
	
	else{
		console.log(baseNumber);
	}
}