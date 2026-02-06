// Create an interface StudentI and export it to be used in other files
export interface StudentI {
    id: number
    name: string
    update:(msg: string) => void
}

// Create a class Student that implements the interface StudentI
export class Student implements StudentI {
    id: number
    name: string

    // Create a constructor that initializes the id and name properties
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    
    // Create a method update and log who received the message
    update(msg: string) {
        console.log(`${this.name} received message: ${msg}`)
    }
}

