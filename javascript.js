let str = prompt("istalgan matinni kiriting", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sint!")
let o = "o";
let a = "a";
let i = "i";
let e = "e";
let u = "u";

let O = "O";
let A = "A";
let I = "I";
let E = "E";
let U = "U";

let probel = " ";
let vergul = ",";
let nuqta = ".";
let undov = "!";
let total = 0;
let total1 = 0;
let total2 = 0;
let arr = str.split("")
for (let text = 0; text < arr.length; text++) {
    const element = arr[text];
    
   let el = (element == a || element == o || element == i || element == e|| element == u || element == A || element == O || element == I || element == E|| element == U);
   
   let il = (element == undov ||element == probel || element == vergul || element == nuqta);
   
if (el == true) {
     total += 1;
}
else if (il == true) {
    total1 += 1;
}
else{
    total2 += 1; 
}
} console.log(" unli hariflar soni: " +total); 
console.log(" simvolar va probellar soni: " +total1); 
 console.log(" undosh hariflar soni: " +total2);
 console.log(" umumiy belgi, probel va hariflar soni: " +arr.length);