interface EmployeeI {
    getId:() => number
    getName:() => string
    setName:(name: string) => void
    setSalary:(salary: number) => void
    calculateSalary:() => number
}
// Abstract Class Employee
abstract class Employee {
    id: number
    name: string
    salary: number

// Constructor to initialize employee properties
    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.setSalary(salary)
    }

    // Get employee Id
    public getId(): number {
        return this.id
    }

    // Get employee name
    public getName(): string {
        return this.name
    }

    // Set employee name
    public setName(name: string) {
        this.name = name
    }

    // Get employee salary
    public getSalary(): number {
        return this.salary
    }

    // Set employee salary with validation
    public setSalary(salary: number){
        if (salary <= 0 ){
           throw new Error ( "Salary must be greater than 0")
        }
        this.salary = salary
    }

    // Abstract method to calculate salary
    abstract calculateSalary(): number
}



class Developer extends Employee implements EmployeeI {

    // Overtime hours property
    overtimeHours: number

    // Developer constructor
    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        super(id, name, salary)      
        this.overtimeHours = overtimeHours
    }

    // Calculate salary for developer 
    calculateSalary(): number{
        return this.salary + (this.overtimeHours * 50000)
        
    }       
}



class Manager extends Employee implements EmployeeI {

    // Team size property
    teamSize: number

    // Manager constructor
    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary)
        this.teamSize = teamSize
    }

    // Calculate salary for manager 
    calculateSalary(): number {
        return this.salary + (this.teamSize * 200000)
        
    }
}

// Create instance developer 
const developer: EmployeeI = new Developer(1, "Linh", -200, 10)
console.log(developer) 
//Developer { id: 1, name: 'Linh', salary: 100, overtimeHours: 10 }

// Print calculate salary of developer
console.log(developer.calculateSalary()); 
//500100

// Update developer name and salary
developer.setName("Mai")
developer.setSalary(200)

console.log(developer); 
// Developer { id: 1, name: 'Mai', salary: 200, overtimeHours: 10 }


console.log(developer.getId()) 
// 1


// Create instance manager
const manager: EmployeeI = new Manager(2, "An", 200, 5)
console.log(manager) 
//Manager { id: 2, name: 'An', salary: 200, teamSize: 5 }

// Print calculate salary of manager
console.log(manager.calculateSalary()); 
//1000200

// Update manager name and salary
manager.setName("Binh")
manager.setSalary(300)
console.log(manager); 
// Manager { id: 2, name: 'Binh', salary: 300, teamSize: 5 }

// Print manager name
console.log(manager.getName()) 
//Binh

// Print error case when salary less than or equal to 0
manager.setSalary(-100)
//throw new Error ( "Salary must be greater than 0")
