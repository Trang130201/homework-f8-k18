
// Part 1:

function classifyTriangle(sideA, sideB, sideC) {
    if (sideA + sideB <=sideC || sideA + sideC <=sideB || sideB + sideC <=sideA) {
        return "Not a triangel"
    }
     let squareA = sideA * sideA
     let squareB = sideB * sideB
     let squareC = sideC * sideC

     if (sideA === sideB && sideB === sideC){
        return "Equilateral triangle"
     } else if (sideA === sideB || sideB === sideC || sideA === sideC){
        return "Isosceles triangle"
     } else if (squareA + squareB === squareC || 
                squareA + squareC === squareB || 
                squareB + squareC === squareA){
        return "Right triangle"
     } else {
        return "Scalene triangle"
     }
}

// Part 2:
function isPerfectSquare(numberA) {
    if (numberA < 0) {
        return false
    }

    let squareRoot = numberA ** 0.5

    return (squareRoot % 1 === 0)
}

