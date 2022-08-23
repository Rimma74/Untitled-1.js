"use strict"
let arr = [];
function solveEquation(a, b, c) {
    let d = b**2-4*a*c;
      if (d < 0) {
        console.log("Дискриминант: " + d);
        arr.push();
        //return [];
        
      } else if (d == 0) {
        console.log("Дискриминант: " + d);
        arr.push(-b/(2*a));
        //return [(-b/(2*a))];
        
      } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d) )/(2*a);
        let x2 = (-b - Math.sqrt(d) )/(2*a);
        console.log("Дискриминант: " + d);
        arr.push(x1, x2);
        //return [x1, x2];
      }
}
solveEquation (1, 2, 1);
console.log(arr);