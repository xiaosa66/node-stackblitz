function sum() {
  let i = 0;
  return function() {
    i++;
    return i;
  };
}

let sumFun = sum();
console.log(sumFun()); // 1
console.log(sumFun()); // 1
console.log(sumFun()); // 1
console.log(sumFun()); // 1
console.log(sumFun()); // 1
console.log(sumFun()); // 2
