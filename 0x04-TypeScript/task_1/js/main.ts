// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Sample Teacher object
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log('Teacher:', teacher1);

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Sample Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log('Director:', director1);

// printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Student class interface
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Student class implementation
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student = new StudentClass("Zoe", "Ama");
console.log(student.displayName());     // Output: Zoe
console.log(student.workOnHomework()); // Output: Currently working
