// Grasshopper - Personalized Message //

function greet (name, owner) {
  if (name == owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

// Return Negative //
function makeNegative(num) {
  if (num >= 0) {
    return num * -1;
  } else {
    return num;
  }
}

// Training JS #10: loop statement--for //
function pickIt(arr){
  let odd = [], even = [];
  for (let i = 0;i<arr.length;i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
    
  return [odd,even];
}


// Even or Odde //
function evenOrOdd(number) {
  if (number % 2 === 0 ) {
    return "Even"
  } else { 
  return "Odd"
  }
}
