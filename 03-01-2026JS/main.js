// Part 1:
function getStudentLevel(studentScore){
    if (studentScore < 0 || studentScore > 10){
        return "Invalid score"
    }


    if (studentScore >=9){
        return "Excellent"
    } else if (studentScore >=8) {
        return "Very Good"
    } else if (studentScore >=6.5) {
        return "Good"
    } else if (studentScore >=5) {
        return "Average"
    } else {
        return "Weak"
    }   

}
console.log(classifyScore(8))

// Part 2:
function getDaysInMonth (month){
    let totalDays
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            totalDays = 31
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            totalDays = 30
            break;
        case 2:
            totalDays = 28 
            break;
        default:
            return "Invalid month"
    }

    return totalDays + " days"
}
console.log(getDaysInMonth(2))

// Part 3:
const isEvenNumber = (n) => n % 2 === 0 ? "Even" : "Odd" 

// Part 4:
function getTicketPriceByAge(age){
    let ticketPrice = age <13 ? 50000 : 100000
    return ticketPrice
}

// Part 5:
function toFahrenheit(c){
    return c * 1.8 + 32
}

// Part 6:
function getElectricityBill(kwH){
    if (kwH < 0){
        return "Invalid input"
    }
    let total
    if (kwH <= 50){
        total = kwH * 1678
    } else if (kwH <=100){
        total = 50 * 1678 + (kwH - 50) * 1734
    } else if (kwH <=200){
        total = 50 * 1678 + 50 * 1734 + (kwH - 100) * 2014
    } else {
        total = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwH - 200) * 2536
    }
    return total
}
