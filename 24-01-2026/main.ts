// ** Task 1:


// Create interface Parttime
interface PartTimeI {
    id: number
    name: string
    salary: number
    hoursWorked: number
}

// Original object
const partTime: PartTimeI = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
}


// Create new objetc, copy from partTime and override hoursWorked = 45
const newPartTime: PartTimeI = {...partTime, hoursWorked: 45}


// Print resul object
console.log(partTime) 
//{ id: 2, name: 'Binh', salary: 20, hoursWorked: 40 }

console.log(newPartTime)
//{ id: 2, name: 'Binh', salary: 20, hoursWorked: 45 }


// ** Task 2:
// 2.1:

// Create interface Employee
interface EmployeeI {
    id: number
    name: string
    salary: number
    getSalary(): number
    hoursWorked?: number
}


// Fulltime employee class
class FullTimeEmployee implements EmployeeI {
    id: number
    name: string
    salary: number

    // Salary = salary
    getSalary(): number {
        return this.salary
    }   
}

// Parttime employee class
class PartTimeEmployee implements EmployeeI {
    id: number
    name: string
    salary: number
    hoursWorked: number

    // Salary = salary * hours worked
    getSalary(): number {
        return this.salary * this.hoursWorked
    }
}


// Function to calculate total salary of all employees
function calculateTotalSalary (employess: EmployeeI[]): number{
    let totalSalary = 0
    for (const employee of employess){
        const salary = employee.getSalary() 
        totalSalary = totalSalary + salary
    }
    return totalSalary
}

// Create full-time employee 
const fullTimeEmployee: EmployeeI = new FullTimeEmployee()
fullTimeEmployee.id = 1
fullTimeEmployee.name = "Bui Xuan Thu"
fullTimeEmployee.salary = 9000


// Create part-time employee
const partTimeEmployee: EmployeeI = new PartTimeEmployee()
partTimeEmployee.id = 9
partTimeEmployee.name = "Nguyen Mai Ha"
partTimeEmployee.hoursWorked = 5
partTimeEmployee.salary = 3800

// Array contains all employees 
const employees: EmployeeI[] = [
    fullTimeEmployee, partTimeEmployee
]

// Print employee info
console.log(fullTimeEmployee)
// FullTimeEmployee {
    // id: 1,
    // name: 'Bui Xuan Thu',
    // salary: 9000,
    // hoursWorked: undefined
    // }


console.log(partTimeEmployee)
// PartTimeEmployee {
    // id: 9,
    // name: 'Nguyen Mai Ha',
    // salary: 3800,
    // hoursWorked: 5
    // }

console.log(`Tổng lương: ${calculateTotalSalary(employees)}`)
// Tổng lương: 28000