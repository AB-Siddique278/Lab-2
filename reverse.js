const allofelement= 'hello, how are you';
function revrsestring(text){
    let myreversed ='';
    for(const letter of text){
        console.log(letter);
        myreversed = letter + myreversed;
    }
    return myreversed;
}
const reverse = revrsestring(allofelement);
console.log(reverse);
