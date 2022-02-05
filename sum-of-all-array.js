// const num=[40,60,70,80,99,];
// let sum = 0;
// for(let i=0; i<num.length; i++){
//     const element = num[i];
//     sum = sum+element;
// }
// console.log(sum);
//sum all of array using function
function sumallofaray(num){
    let sum=0;
    for(i=0; i<num.length; i++){
        const element = num[i];
        sum = sum+element;
       

    }
    return sum;
}
const total = sumallofaray([32,55,66,88,77,99,44,77,83]);
console.log('total sum of array ',total);