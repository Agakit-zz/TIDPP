// function for the first lab

let a = process.argv[2]
let b = process.argv[3]
let c = process.argv[4]
let x1,x2;
let discriminant = b*b-4*a*c
console.log(discriminant)
if (discriminant>0){
x1 = (-b - Math.sqrt(discriminant))/2
x2 = (-b + Math.sqrt(discriminant))/2
console.log(`x1 = ${x1}\nx2 = ${x2}\ndiscriminant = ${discriminant}`)
} else if(discriminant === 0) {
x1 = (-b/2*a);
console.log(`x1 = ${x1}\ndiscr = ${discriminant}`)
} else {
console.log('discriminant<0')
}
console.log(discriminant)
