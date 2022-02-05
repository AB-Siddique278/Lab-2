
// console.log(Math.round(Math.random()*10));
// const number = -78; 
// const answer = Math.abs(number);
// console.log(answer);
// console.log(Math.floor(12.96));
// function add(a, b){ 
//    return a + b;
// }
// function add(a, b){
//     return a + b;
//   }

  
//   console.log(add("adam","eve"));

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter=='a'){
    count++;
  }
}
console.log(count)