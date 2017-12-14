
//// for loops and reverse loops ///


var names = ["con", "john", "paddy", "snowy"];


for(var i = 0; i < names.length; i++) {
  console.log(names[i].reverse);
}

for( var i = names.length - 1; i >= 0; i--){
  console.log(names[i]);
}




///// age functions //////


function calculateAge(yearOfBirth){
   var age = 2017 - yearOfBirth;

   return age;

}

var conAge = calculateAge(1988);
var rigAge = calculateAge(1999);

// console.log(rigAge);


function retirement(name, year) {

 var age = calculateAge(year)
 var retirement = 65 - age;

 if (retirement >= 0) {
   console.log(name + " retires " + retirement + "years");
 } else {
      console.log(name + " is already retired ");
 }
}

retirement('con', 1988);
retirement('mom', 1944);



//////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age
(18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/






function printFullAge(years) {


  var ages = [];
  var fullAges = [];

  for(var i = 0; i < years.length; i ++) {
     ages[i] = 2017 - years[i];
  }


  for(i=0; i < ages.length; i++) {

    if(ages[i] >= 18) {

       console.log("Person " + (i + 1)  + ' is ' + ages[i] + " and is of full age ");
       fullAges.push(true);
     }

     else {
        console.log("Person " + (i + 1) + ' is ' + ages[i] + " and is NOT of full age ");
       fullAges.push(false);
     }

  }

  return fullAges;
}

var years = [ 2000, 1988, 1983, 1984, 1990];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915,1999])
