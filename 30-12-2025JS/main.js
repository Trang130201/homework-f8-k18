// Task 1:

const classA = ["An", "Binh", "Chi"]
const classB = classA
classB[0] = "An Updated"
console.log(classA)
// The name "An" in classA was changed even though you only modified classB because classB = classA, they point to the same memory address. So when we modify classB, classA also changes.

// Task 2:
// 2.1:
let x = "10"
let y = 2
console.log(x + y) // "102" 
console.log(x-y) // 8
console.log( x * "3") // 30
console.log("Hello" - y) //NaN
// 2.2: the addition (+) results in "102" beacause (+) can do add numbers and join strings. When one operand is a string, it converts the other operand to a string and JS concatenates them instead of adding.
// The subtraction (-), results in 8 because (-) only works with numbers. So JS converts the string "10" to number 10 and then 10 - 2 = 8.
// 2.3: The result NaN in the last calculation because "Hello" can't convert to a number. Any math with NaN results in NaN.

// Task 3:
let age
let mathScore
let isVip

age = 9
mathScore = 10
isVip = false
let canEnter = (age >=10 && mathScore>7) || isVip
console.log(canEnter) 

age = 9
mathScore = 10
isVip = true 
canEnter = (age >=10 && mathScore>7) || isVip
console.log(canEnter) 

// !(age <10) mathematically the same as age >=10 because the negation of (age<10) is age is not less than 10, which means age is greater than or equal to 10.

// Task 4:
const laptop = {
    brand :"Dell",
    price : 1000,
    spec :{ram: "8GB", ssd:"256GB"}   
}

const myLaptop = laptop
myLaptop.brand ="Apple"

const mySpec = laptop.spec
mySpec.ram ="16GB"

console.log(laptop.brand) //Apple
console.log(laptop.spec.ram) //16GB

// // The changes made to myLaptop and mySpec affected the original laptop object because myLaptop and laptop share the same memory address, so changing myLaptop.brand also changes laptop.brand.
// mySpec and laptop.spec share the same memory address, so changing mySpec.ram also changes laptop.spec.ram


