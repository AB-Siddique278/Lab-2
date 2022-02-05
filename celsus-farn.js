var cals = 30;
var farn = (cals*(9/5))+32;
console.log("Fahrenheit >>",farn);
//using fancation;

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}
console.log(cToF(36))
