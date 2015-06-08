var assertEqual = function(actual, expected){
	console.log(actual === expected ? 'PASS' : 'FAIL');
}


assertEqual(2,2)


var argsSum = function (){
  total = 0;
  for (var i = 0; i < arguments.length; i++){   
    total = total + arguments[i] 
  }
return total
}


assertEqual(argsSum(3,7,8), 18);
assertEqual(argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1), 14);

