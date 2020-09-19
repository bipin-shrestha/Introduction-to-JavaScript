/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
if (votingAge > 18) {
    console.log("True");
} else {
    console.log("False");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let a = 5;
let b = 8;
if (b === 8) {
    a = 10;
    console.log(a);
}
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let base = "1999";
let baseInt = Number(base);
console.log(baseInt);

//Task d: Write a function to multiply a*b
function multiply(a, b) {
    return a * b;
}
console.log(multiply(1, 2));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function ageInDogYears(age) {
    return age * 7;
}
console.log(ageInDogYears(32));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weight, age) {
    let foodToFeed;
    if (age < 1) {
        console.log("puppy ");
        if (age <= 0.33) {
            foodToFeed = 0.1 * weight;
        } else if (age > 0.33 && age <= 0.58) {
            foodToFeed = 0.05 * weight;
        } else if (age > 0.58) {
            foodToFeed = 0.04 * weight;
        }
    } else {
        console.log("adultDog");
        if (weight <= 5) {
            foodToFeed = 0.05 * weight;
        } else if (weight >= 6 && weight <= 10) {
            foodToFeed = 0.04 * weight;
        } else if (weight >= 11 && weight <= 15) {
            foodToFeed = 0.03 * weight;
        } else {
            foodToFeed = 0.02 * weight;
        }
    }

    return foodToFeed;
}
console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
function game(choice) {
    let choiceNumber;
    if (choice === "Rock") {
        choiceNumber = 0;
    } else if (choice === "Paper") {
        choiceNumber = 1;
    } else {
        choiceNumber = 2;
    }
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (choiceNumber == 0) {
        if (computerChoice == 1) {
            console.log("You lost!");
        } else if (computerChoice == 2) {
            console.log("You Won!");
        } else {
            console.log("Draw!");
        }
    }
    if (choiceNumber == 1) {
        if (computerChoice == 0) {
            console.log("You Won!");
        } else if (computerChoice == 1) {
            console.log("Draw!");
        } else {
            console.log("You Lost!");
        }
    }
    if (choiceNumber == 2) {
        if (computerChoice == 0) {
            console.log("You Won!");
        } else if (computerChoice == 1) {
            console.log("you Lost!");
        } else {
            console.log("Draw!");
        }
    }
}

game("Paper");

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function metricConverter(km) {
    return km * 0.621;
}
console.log(metricConverter(40));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function number(feet) {
    return feet * 30.48;
}
console.log(number(23));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall,(number) bottles of soda,
//take one down pass it around(number left over) bottles of soda on the wall `
function annoyingSong(startingNumber) {
    for (let i = startingNumber; i > 0; i--) {
        console.log(
            i +
            " Bottles of Soda on the wall, " +
            i +
            " bottles of soda, take one down pass it around " +
            (i - 1) +
            " bottles of soda on the wall "
        );
    }
}
annoyingSong(2);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
function gradeCalculator(score) {
    if (score >= 90) {
        console.log("Grade A ");
    } else if (score >= 80) {
        console.log("Grade B");
    } else if (score >= 70) {
        console.log("Grade C");
    } else if (score > 60) {
        console.log("Grade D");
    } else {
        console.log("Grade F");
    }
}
gradeCalculator(76);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

function vowelcount(words) {
    words = words.toLowerCase();
    let counter = 0;
    let arrays = words.split('');
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] == 'a' || arrays[i] == 'e' || arrays[i] == 'i' || arrays[i] == 'o' || arrays[i] == 'u') {
            counter += 1;
        }
    }

    console.log(counter);

}

vowelcount("elephant");


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object