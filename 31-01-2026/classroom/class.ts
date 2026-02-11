// Import the StudentI interface from student.ts
import type { StudentI } from "./student.ts"

// Create an interface ClassI and export it to be used in other files
export interface ClassI {
    getName:() => string
    addStudent: (student: StudentI) => void
    removeStudent: (student: StudentI) => void
    notifyStudents: (msg: string) => void
    postAnnouncement: (announcement: string) => void
}

export class Class implements ClassI {
    private name: string
    private students: StudentI[]

    // Create a constructor of the Class with this name and an empty array of students
    constructor(name: string) {   
        this.name = name
        this.students = []
    }

    getName(): string {
        return this.name
    }

    // Add student to the students array
    addStudent(student: StudentI) {
        this.students.push(student)
    }


    // Remove student by using filter method and comparing ids
    removeStudent(student: StudentI) {
        this.students = this.students.filter((s) => {
           return s.getId() !== student.getId()
        })  
    }

    // Notify all students by calling their update method
    notifyStudents(msg: string) {
        this.students.forEach((student: StudentI) => {
            student.update(msg)
        })
    }


    // Post an announcement and notify all students
    postAnnouncement(announcement: string) {
        console.log(`${this.name} send a new notification: ${announcement}`)
        this.notifyStudents(announcement)
    }
}
