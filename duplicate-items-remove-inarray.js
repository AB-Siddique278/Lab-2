const names = ['abul','babul','kabul','abul','babul','rabul','ebul','rebul','gibul','gibul','babul'];
function removeDuplicate(name){
    const unique= [];
    for(let i= 0; i<names.length; i++){
        const element = names[i];
        console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);

        }
    }
    return unique;
}
const uniquenames = removeDuplicate(names);
console.log('this unique name is ',uniquenames);
