/* let dato = true;
//dato = 'juan';
//dato = true;
if(typeof dato ===  'number'){
    console.log('dato es un número');
}else{
    if(typeof dato === 'string'){
        console.log('dato es un texto');
    }else{
        if(typeof dato === 'boolean'){
            console.log('dato es un booleano');
        }else{
            console.log('dato es de otro tipo');
        }
    }
}



var a = +true;
var b = ++a;
var c = b++;

console.log(a);
console.log(b);
console.log(c);

console.log(a + --b -c++)**2; 

var x = true;

var a = +x;
// a = 1
var b = ++a;
// b = 2
// a = 2
var c = b++;
// a = 2
// b = 3
// c = 2
var d = '9';

console.log(a); // 2
console.log(b); // 3
console.log(c); // 2

console.log(a + --b -c++ +d)**2; 7


var x = 5
var y = 10
var z = 15

if(x > y && x > z){
    console.log('x es mayor que y y z')
}else if(y > x && y > z){
    console.log('y es mayor que x y z')
}else if(z > x && z > y){
    console.log('z es mayor que x y y')
}else{
    console.log('x, y y z son iguales')
}


console.log(!(true))


var a = 3;
var b = '3';

var m = (a===b)?'Son iguales':'Son diferentes';
console.log(m);








var num = prompt("Introduce un número");
//var x = num +9;
var x = eval(num) +9;
console.log(x);
*/


