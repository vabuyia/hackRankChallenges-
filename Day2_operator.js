/**
Task: Day 2: Operators
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), 
and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
 Round the result to the nearest integer.

 https://www.hackerrank.com/challenges/30-operators/problem
  */

 /*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */
    
function solve(meal_cost, tip_percent=, tax_percent) {
    // Write your code here
    let total_cost;
    total_cost =  meal_cost + meal_cost * tip_percent/100 + meal_cost * tax_percent/100;
    console.log(Math.round(total_cost));   
  }


