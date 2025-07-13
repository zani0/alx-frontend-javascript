interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 21,
  location: "Accra",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  location: "Kumasi",
};

const studentsList: Student[] = [student1, student2];

// Create table elements
const table = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";

// Add table headers
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.padding = "8px";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.padding = "8px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add student data
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  nameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
