let a = prompt("Qual é o valor de a?")
let b = prompt("Qual é o valor de b?")
let c = a

a = b;
b = c;

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)