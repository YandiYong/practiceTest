const prompt = require('prompt-sync')();//Need this for user to input 

const operator = prompt("Choose an operator (-,+,*,/)");// This will give user to enter the input

var num1 = prompt("Enter num1 ");
    num1 = parseFloat(num1);
var num2 = prompt("Enter num2 ");
    num2 = parseFloat(num2);  

    let results; 

switch(operator){
  
    case '+':
       results = num1 + num2;
       console.log(`The answer is ${num1} + ${num2} = ${results}`);
        break;
        
    case '-':
        results = num1 - num2;
        console.log(`The answer is ${num1} - ${num2} = ${results}`);
        break;    
        
    case '*':
        results = num1 * num2;
        console.log(`The answer is ${num1} * ${num2} = ${results}`);
        break;

    case '/':
        results = num1 / num2;
        console.log(`The answer is ${num1} / ${num2} = ${results}`);
        break;    

    default:

         console.log("UNDEFINED!!");

}    