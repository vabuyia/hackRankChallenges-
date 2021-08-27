/**
 * 
 * Day 4: Class vs. Instance
 * Task
Write a Person class with an instance variable,Age , and a constructor that takes an integer, InitialAge, as a parameter.
 The constructor must assign InitialAge to  Age after confirming the argument passed as  is not negative; if a negative argument is passed as , 
 the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following
  instance methods:

yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If , print You are young..
If  and , print You are a teenager..
Otherwise, print You are old..
To help you learn by example and complete this challenge, much of the code is provided for you, 
but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method.
 Don't worry if you don't understand it all quite yet!

 https://www.hackerrank.com/challenges/30-class-vs-instance/problem


 */

function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge > 0) this.age = initialAge;
    else {
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
    }
    this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if (this.age < 13) console.log("You are young.");
      else if (this.age < 18) console.log("You are a teenager.");
      else console.log("You are old.");
    };
    this.yearPasses=function(){
        this.age++;
   };
}