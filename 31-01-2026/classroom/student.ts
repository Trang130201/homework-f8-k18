// Create an interface StudentI and export it to be used in other files
export interface StudentI {
    update:(msg: string) => void
    getId:() => number
}

// Create a class Student that implements the interface StudentI
export class Student implements StudentI {
    private id: number
    private name: string

  
    // Create a constructor that initializes the id and name properties
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    getId(): number {
        return this.id
    }
    
    getName(): string {
        return this.name
    } 

    // Create a method update and log who received the message
    update(msg: string) {
        console.log(`${this.name} received message: ${msg}`)
    }
}

