let numbers=[];
var sum=0;
var mean=0;

function Maths(){
    x=prompt("Enter the amount of numbers you have for calculation");

    for(i=0;i<x;i++){
        numbers[i]=prompt("Please enter a number");
    }

    for (i=0;i<numbers.length;i++){
        sum += parseInt(numbers[i], 10);
    }
    mean = sum/numbers.length;

    document.getElementById("math").innerHTML+="<br> The sum of your numbers is: "+sum;
    document.getElementById("math").innerHTML+="<br> The mean of your numbers is: "+mean;
}