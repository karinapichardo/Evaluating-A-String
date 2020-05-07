// Given a fraction as a string, return whether or not it is greater than 1 when evaluated. 

function greaterThanOne(frac) {
  var split = frac.split('/');
  var result = parseInt(split[0], 10) / parseInt(split[1], 10);
  return result > 1; 
}

//testing our function greaterThanOne by calling it 

console.log(greaterThanOne("10/10")) // --> false
console.log(greaterThanOne("1/2")) // --> false
console.log(greaterThanOne("7/4")) // --> true
console.log(greaterThanOne("10/10")) // --> false
console.log(greaterThanOne("12/30")) // --> false
console.log(greaterThanOne("28/3")) // --> true
console.log(greaterThanOne("35/31")) // --> true
