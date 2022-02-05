function leargestelement (number){
    let myleangth= 0;
    for(let i = 0; i < number.length; i++){
        let element =number[i];
        if(element>myleangth){
            myleangth=element;
        }
       
    }
    return myleangth;
    
}
let myarray = [20,50,60,80,40,70];
let totalarray= leargestelement(myarray);
console.log('The leargest number is ',totalarray);