let fibo = [0,1]
for(let i = 2; i<=1000; i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log('this fibonacci Seies',fibo);