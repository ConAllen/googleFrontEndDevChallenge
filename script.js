/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if ( number % 2 === 0) {
    console.log("even");

} else {
console.log("odd");
}

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Musical Groups (3-3)
 */


var musicians = 20;
if (musicians === 1) {
    console.log("solo");
}// your code goes here
else if (musicians === 2) {
    console.log("duet");
}// your code goes here
else if (musicians === 3) {
    console.log("trio");
}// your code goes here
else if (musicians === 4) {
    console.log("quartet");
}// your code goes here
else if (musicians > 4) {
    console.log("this is a large group");
}// your code goes here

else {
    console.log("not a group");
}

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

    if (room === "gallery") {
       weapon = "trophy";
          if (suspect === "Ms. Van Cleve") {
          solved = true;
        }
    } else if (room === "dining room") {
        weapon = "knife";
          if (suspect === "Mr. Parkes") {
          solved = true;
          }
    } else if (room === "billiards room") {
        weapon = "pool stick";
          if (suspect = "Mrs. Sparr") {
          solved = true;
          }
    } else {
       weapon = "poison";
          if (suspect === "Mr. Kalehoff") {
          solved = true;
          }
        }

       if (solved) {
  	       console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
  }
  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz - Checking Your Balance (3-5)
   */

  // change the values of `balance`, `checkBalance`, and `isActive` to test your code
  var balance = 325.00;
  var checkBalance = true;
  var isActive = false;

  if (!checkBalance) {
      console.log("Thank you. Have a nice day!");
  } else if (isActive && balance > 0) {
      console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (!isActive) {
      console.log("Your account is no longer active.");
  } else if (balance === 0) {
      console.log("Your account is empty.");
  } else if (balance < 0) {
       console.log("Your balance is negative. Please contact bank.")
  }

  /////////////////////////////////////////////////////////////////////////////

  /*
   * Programming Quiz: Ice Cream (3-6)
   *
   * Write a single if statement that logs out the message:
   *
   * "I'd like two scoops of __________ ice cream in a __________ with __________."
   *
   * ...only if:
   *   - flavor is "vanilla" or "chocolate"
   *   - vessel is "cone" or "bowl"
   *   - toppings is "sprinkles" or "peanuts"
   *
   * We're only testing the if statement and your boolean operators.
   * It's okay if the output string doesn't match exactly.
   */

  // change the values of `flavor`, `vessel`, and `toppings` to test your code
  var flavor = "strawberry";
  var vessel = "cone";
  var toppings = "cookies";

  // Add your code here

  if (((flavor === "vanilla" || flavor === "chocolate") &&
      (vessel === "cone" || vessel === "bowl") &&
      (toppings === "sprinkles" || toppings === "peanuts"))){
          console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
      }

/////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 24;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  console.log("S");
}else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28 ) && (shirtLength >= 34) && (shirtSleeve >= 10.13))){
  console.log("3XL");
} else {
    console.log("N/A");
}
/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - var color;
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

// var category = eatsPlants && eatsAnimals ? "omnivore" : eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);

// conditional ? (if condition is true) : (if condition is false)

/////////////////////////////////////////////////////////////////////////////


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary;

// your code goes here


switch (education) {
 case "no high school diploma":
   salary ="$25,636";
   break;
  case "a high school diploma":
    salary = "$35,256";
   break;
  case "an Associate's degree":
    salary = "$41,496";
     break;
  case "a Bachelor's degree":
    salary ="$59,124";
     break;
  case "a Master's degree":
    salary ="$69,732";
     break;
  case "a Professional degree":
    salary ="$89,960";
     break;
  case "a Doctoral degree":
    salary = "$84,396";

}
            // In 2015, a person with __________ earned an average of __________/year.
console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.")

////////////////////////////// IF ELSE /////////////////////////////////////////////



var option = 3;

if (option === 1) {
  console.log("you selected 1");
} else if (option === 2) {
  console.log("you selected 2");
} else if (option === 3) {
  console.log("you selected 3");
}

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
}



///////////////////////// Switch statements /////////////////////////////////////




switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}



var option = 3;

switch (option) {
  case 1:
  console.log("you selected 1");
    break;
  default:
switch (option) {
  case 2:
  console.log("you selected 2")
    break;
switch (option) {
  case 3:
  console.log("you selected 3")
    break;

}

var option = 2;

switch (option) {
  case 1:
console.log("you selected 1");
    break;
  case 2:
console.log("you selected 2");

case 3:
console.log("you selected 3");



var x = 1;
while (x < 10) {
  x = x + 1;
console.log(x);
}

///////////////////////// FIZZ Buzz //////////////////////////////////////////

var x =1;

while ( x <= 25){

if (( x % 3 === 0 ) && (y % 5 === 0)) {
  console.log( "conzbuzz");
} else if (x % 3 === 0) {
    console.log("conz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }

  x = x + 1;
}


///////////////////////////////  //////////////////////////////////////////


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for(var x = 0; x<=25; x++){
    for(var y = 0; y <=99; y ++){
        console.log(x+"-"+y);
    }
}


/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here


function laugh() {
    var message = "hahahahahahahahahaha!";
    return message;
}
console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */

function laugh (num) {
    var ha = "";
    for(i=0; i < num; i++) {
        ha = ha + "ha"
    };
    return ha + "!";
} console.log(laugh(3));
