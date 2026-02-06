import type { StudentI } from "./student.ts";
import type { ClassI } from "./class.ts";

import { Student } from "./student.ts";
import {Class} from "./class.ts"

// Create an instance of Class and some instances of Student 
const classBasicJS: ClassI = new Class("JS basic class")
const st1: StudentI = new Student(1, "An")
const st2: StudentI = new Student(2, "Binh")
const st3: StudentI = new Student(3, "Chi")

// Log the class instance before adding students
console.log(classBasicJS)
// Class { name: 'JS basic class', students: [] }

// Add students to the class
classBasicJS.addStudent(st1)
classBasicJS.addStudent(st2)
classBasicJS.addStudent(st3)

// Log the class instance after adding students
console.log(classBasicJS)
/* Class {
  name: 'JS basic class',
  students: [
    Student { id: 1, name: 'An' },
    Student { id: 2, name: 'Binh' },
    Student { id: 3, name: 'Chi' }
  ]
}
*/


// Post an announcement to all students with the message 
classBasicJS.postAnnouncement("Mai kiểm tra OOP")
/* Output:
JS basic class send a new notification: Mai kiểm tra OOP
An received message: Mai kiểm tra OOP
Binh received message: Mai kiểm tra OOP
Chi received message: Mai kiểm tra OOP
*/

// Remove a student from the class and log the class instance again
classBasicJS.removeStudent(st1)
console.log(classBasicJS)
/*Class {
  name: 'JS basic class',
  students: [ Student { id: 2, name: 'Binh' }, Student { id: 3, name: 'Chi' } ]
}
*/

// Add the student back to the class and log the class instance again
classBasicJS.addStudent(st1)
console.log(classBasicJS)
/* Class {
  name: 'JS basic class',
  students: [
    Student { id: 2, name: 'Binh' },
    Student { id: 3, name: 'Chi' },
    Student { id: 1, name: 'An' }
  ]
}
*/


