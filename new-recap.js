// var num1= 30;
// var num2 =60;
// sum = num1+num2;
// console.log(sum);



// function mysum(num1,num2){
//     sum=num1+num2;
//     return sum;
// }
// var result = mysum(20,30);
// console.log('this result is',result);



// var num =21;
// var totalnum = num%2;
// console.log(totalnum==0);

// function evenodd(num){
//     if(num%2==0){
//         return true;
//     }
//     return false;

// }
// var num= 20;
// var result = evenodd(num);
// console.log('This number is',result);

// for(i=0; i<=10; i++){
//     console.log(i);
// }


// i=0;
// while(i<=10){
//     console.log(i);
//     i++
// }

// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// //var index= stuname.indexOf('jamal');
// stuname[2]='borkot'
// console.log(stuname);

// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// stuname.push('hridoy');
// console.log(stuname);

// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// stuname.pop();
// console.log(stuname);

// if(50>60){
//     console.log("Amar sonar bangla");
// }
// else if(50==60){
//     console.log("tumi are ame soman na ");
// }
// else if(60<70){
//     console.log("Ha tui boro amar thaka");
// }


// var mobil={
//     color:'black',
//     ram:'6gb',
//     price:15000,
//     porossore:'media tech helio-G80'
             
// };
//console.log(mobil.porossore);
// mobil.price=12000;
// console.log(mobil.price);

// mobil["color"]='green';
// console.log(mobil);

// function multiple(num1,num2,num3){
//     var totalresult=(num1*num2*num3);
//     console.log(num1,num2,num3);
//     return totalresult;
// }
// var fastnum=90;
// var secondnum=80;
// var thirdnum=70;

// var mynumber=multiple(fastnum,secondnum,thirdnum);
// console.log('the result is ',mynumber);


// var inchi = 120;
// var inchitofeet= inchi/12;
// console.log(inchitofeet);

// function inchestofeet(inche){
//     var feet=inche/12;
//     return feet;
// }
// var inche=250;
// var totalresult =inchestofeet(inche);
// console.log(totalresult);


// function stugrate(marks){
//     if(marks>=90){
//         return 'A';
//     }
//     else if(marks>=80){
//         return 'B';
//     }
//     else if (marks>=70){
//         return 'C';
//     }
//     else if(marks>=60){
//         return 'D'
//     }
//     else{
//         return 'F'
//     }

// }
// var marks =90;
// var stumarks = stugrate(marks);
// console.log(stumarks);


// function leapyear(year){
//     if((0==year%4)&&(0!=year%100)||(0==year%400)){

//         console.log(year,'Yes this is leapyear');
//     }
//     else{
//         console.log(year,'oh...! this is not leaper');
//     }
// }
// var year=2012;
// var result=leapyear(year);


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


// var first = 30;
// var second= 40;
// console.log(first,second);
// var temp = first;
// first=second;
// second=temp;
// console.log(first,second);


// var a= 900;
// var b =700;
// var c= 600;
// if(a>b&&a>c){
//     console.log(a,"ara salar put ami boro");
// }
// else if(b>a&&b>c){
//     console.log(b,'ara madar tost ami boro');
// }
// else{
//     console.log(c,'ami boro');
// }


// var num = [40,50,60,80];
// let sum=0;
// for(let i=0; i<=num.length; i++){
//     var element = num[i];
//     sum=sum+element;
// }
// console.log(element);


// const num=[40,60,70,80,99,];
// let sum = 0;
// for(let i=0; i<num.length; i++){
//     const element = num[i];
//     sum = sum+element;
// }
// console.log(sum);


// function sumofarray(number){
//     let sum=0;
//     for(i=0; i<number.length; i++){
//         let element = number[i];
//         sum=sum+element;
//     }
//     return sum;
// }
// var total = sumofarray([32,56,80,72,90,80,70])
// console.log(total);

// function largestarray (number){
//     var mylangth = 0;
//     for(var i=0; i < number.length; i++){
//         let temp=number[i];
//         if(temp>mylangth){
//             mylangth=temp;
//         }

//     }
//     return mylangth
// }
// let myarray=[20,60,80,70,90,88,77,88,58,40,60];
// let totalarray=largestarray(myarray);
// console.log(totalarray);


// for(var i=7;i<19; i+=2){
//     console.log(i);
// }


// var i;
// for(i=7; i<=20; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
    
// }



// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// var index= stuname.length;
// console.log(index)

// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// var index= stuname.push('saklin');
// console.log(stuname);


// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// stuname[3]=('saklin');
// console.log(stuname);


// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// delete stuname[1];
// console.log(stuname);


// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// stuname.splice(1, 1);
// console.log(stuname);


// var stuname=['kamal','jamal','korim','rohim','siddique','bakar'];
// var index= stuname.indexOf('jamal');
// console.log(index)


// function mulardam(quantati){
//     var price;
//     if(quantati>=2){
//         price = quantati*30;
//     }
//     else{
//         price = quantati*25;

//     }
//     return price;
// }
// console.log(mulardam(3))


//centimitter to meter convert using funcation
// function centimitiretomiter(meter){
//     var result;
//     result= meter/100;
//     return result;
// }
// var number = 50;
// var totalresult= centimitiretomiter(number);
// console.log(totalresult);


// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'third longish item'
//   ];
  
//   var lgth = 0;
//   var longest;
  
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > lgth) {
//       var lgth = arr[i].length;
//       longest = arr[i];
//     }
//   }
  
//   console.log(longest);






// function longestString(arr){
//   for (i=0; i<arr.length; i++){
//       if (arr[i].length > long1){
//         long1= arr[i].length;
//       }

//   }
//   return long1;
// }
// var long1= 0;
// var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

// let totalarray=longestString(arr);
// console.log('The leargest number is ',totalarray);



// function leargestelement (number){
//   let myleangth= 0;
//   for(let i = 0; i < number.length; i++){
//       let element =number[i];
//       if(element>myleangth){
//           myleangth=element;
//       }
     
//   }
//   return myleangth;
  
// }
// let myarray = [20,30,50,60];
// let totalarray= leargestelement(myarray);
// console.log('The leargest number is ',totalarray);



// var myarray = ['amar sonar bangla','abu bakar','saklin mstaque'];

// var lgth = 0;
// var longest;
// for(var i=0; i<myarray.length; i++){
//   if(myarray[i].length>lgth){
//     var lgth = myarray[i].length;
//     longest= myarray[i];
//   }
// }
// console.log(longest);


// function mylargestarray(myarray){
//   var lgth = 0;
//   var longest;
//   for(var i=0; i<myarray.length; i++){
//     if(myarray[i].length>lgth){
//       var lgth= myarray[i].length;
//       longest=myarray[i];
//     }
//   }
//   return longest;
// }
// var myarray = ['amar sonar bangla','abu bakar','saklin mstaque'];
// let totalarray=mylargestarray(myarray);
// console.log(totalarray);




// //Book page quantati
// function publisheedbook(book1,book2,book3){
//   const firstbookpage =100;
//   const secondbookpage=200;
//   const thirdbookpage =300;


//   let book_1_quantati=book1*firstbookpage;
//   console.log('first book page quantati',book_1_quantati);

//   let book_2_quantati=book2*secondbookpage;
//   console.log('second book page quantati',book_2_quantati);

  
//   let book_3_quantati=book3*thirdbookpage;
//   console.log('third book page quantati',book_3_quantati);

//   totalbookpagequantati=book_1_quantati*book_2_quantati*book_3_quantati;
//   return totalbookpagequantati;

// }
// var fstbook=5;
// var secbook=7;
// var thirbook=8;
// let  total= publisheedbook(fstbook,secbook,thirbook);
// console.log('total 3 book page',total);


// function anaToVori(ana){
//   let vori=ana/16;
//   return vori;
// }
// let ana=20;
// var anaandvori = anaToVori(a);
// console.log(anaandvori);

// function inchestofeet(inche){
//     var feet=inche/12;
//     return feet;
// }
// var inche=250;
// var totalresult =inchestofeet(inche);
// console.log(totalresult);


// function anaToVori(ana){
//   var vori =ana/16;
//   return vori;
// }
// let ana=20;
// var totalresult=anaToVori(ana);
// console.log(totalresult);



// function mylargestarray(myarray){
//   var lgth = 0;
//   var longest;
//   for(var i=0; i<myarray.length; i++){
//     if(myarray[i].length>lgth){
//       var lgth= myarray[i].length;
//       longest=myarray[i];
      
      
//     }
//   }
//   // return longest;
//   const totalarray=myarray.filter(longest=>{return longest%2!==0;})
// }
// var myarray = ['hrido','abu baka','saklin mstaque'];
// let totalarray=mylargestarray(myarray);
// console.log(totalarray);





//problrm-4

function mylargestarray(myarray){
  var lgth = 0;
  var longest;
  for(var i=0; i<myarray.length; i++){
    // if(myarray[i].length>lgth){
    //   var lgth= myarray[i].length;
    //   longest=myarray[i];
    // }
    if(myarray[i].length % 2!==0){
      var lgth= myarray[i].length;
      longest=myarray[i];
    }
  }
  return longest;
}
var myarray = ['amar sonar bangla','abu bakar','saklin mstaque','rafia','karim'];
let totalarray=mylargestarray(myarray);
console.log(totalarray);


// function stringOfEvens(num) {
//   for (let i = 0; i <= num.length; ++i) {
//     if (i % 2!== 0 ); {
//       return i;
//    }
//   }
// }
// var num = ['amar sonar bangla','abu bakar','saklin mstaque','rafia','karim'];
// let totalarray=stringOfEvens(num);
// console.log(totalarray);