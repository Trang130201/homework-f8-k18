// Part 1.
// 1.1
const name = "Nguyen Minh Lan"
let age = 20
let isStudent = true
console.log("Name:", name)
console.log("Age:", age)
console.log("Is Student:", isStudent)

// 1.2
let a = 5
a= 19
let b = 10
b = 56
console.log(a)
console.log(b)

// Part 2
// const and let: 
// - A const variable cannot have its value changed
// - A let variable can have its value changed
// Use const when you are sure the value will not change
// The given code is incorrect, because const variables cannot be reassigned.

// Phan 3
//  100 - number
// "100" - string
//  TRUE - boolean
//  [1, 2, 3] - object
//  {name:"An",age:20) - object
//  null - object
//  undefined - undefined

let student = {name: "Tran Nhu Suong", age: 19, scores:[9, 9, 10]}
console.log(student)

// Part 4
let a = "1000"
a = Number(a)
console.log(a)
console.log(typeof a)

let c = 1000
c = String(c)
console.log(c)
console.log(typeof c)

let x = true
x = String(x)
console.log(x)
console.log(typeof x)

// Part 5

Boolean(0) - false
Boolean(1) - true
Boolean("") - false
Boolean("hello") - true
Boolean(null) - false
Boolean([]) - true

// Part 6
const numbers = [4, 3, 1, 5, 1]
console.log(numbers[0])
console.log(numbers[4])


When assigning: const a = numbers;
numbers is already stored in a memory location. When assigning a = numbers, a shares the same memory location as numbers.