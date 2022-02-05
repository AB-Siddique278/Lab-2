// //creating a funcation

// function square(num){
//     var result=num*num;
//     console.log('square is ',result);
// }
// square(7);

//calling a Maltipule Paramatier 
/*
function sum(num1,num2){
    var result= num1+num2 ;
    console.log("this result is ",result);

}
sum(20,10);
*/
//for loop
// for (var i=0; i<=10; i++){
//     console.log('i love my countery ');
// }
//While loop
// var i=0;
// while(i<10){
//     console.log('I love my countery');
//     i++;
// }

// factorial using funcation
// function getfuncaion(number){
//     var factorial = 1;
//     var i=1;
//     while(i<=number){
//         factorial = factorial*i;
//         i++;
//     }
//     return factorial;
// }
// var totalfactoril = getfuncaion(11);
// console.log('this factorial is ',totalfactoril);


// Leapyear using funcation
// function feapyear(myyerar){
//     if((0==myyerar%4)&&(0!=myyerar%100)||(0==myyerar%400)){
//         console.log(myyerar,"this is a leapyear")
//     }
//     else{
//         console.log(myyerar,"this is not leapyear")
//     }
// }
// var myyear= 2020;
// // console.log(myyear);
// feapyear(myyear);

// Grade Calculating using funcation
function stugrade(marks){
    if(marks>=90){
        return 'A';
    }
    if(marks>=80){
        return 'B';
    }
    if(marks>=70){
        return 'C';
    }
    if(marks>=60){
        return 'D';
    } 

}
var marks=70;
var grade=stugrade(marks);
console.log('stu grades',grade);
stugrade();