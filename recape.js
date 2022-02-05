var time = '10:15';
var bokprice = 150;
var iswhitecolor = false;

//array
var partners = ['sajid','mojid','nojid','lajit'];
var elementCount = partners.length;
var nojidindex= partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

//conditionals
if(bookprice < 120){
    console.log('I will buy this book');
}
else{
    console.log('Mama ,kichu Discount den na ');
}

//loop
var i= 0;
while (i<=17){
    i++;
}

for (var i=0; i<=17; i++){

}
//funcation
 function isMoonup(time){
     if(time >=19 && time<=5 ){
         return true;
     }
     return false;
 }
 var moonStatus = isMoonup(21);