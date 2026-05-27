let employees = [];

function addEmployee() {
  let name = document.getElementById("name").value.trim();
  let empId = document.getElementById("empId").value.trim();
  let salary = parseFloat(document.getElementById("salary").value);
  let dept = document.getElementById("dept").value.trim();

  if (!name || !empId || isNaN(salary) || !dept) {
    alert("Please fill all fields properly");
    return;
  }

  let employee = {
    name: name,
    id: empId,
    salary: salary,
    department: dept
  };

  employees.push(employee);
  alert("Employee Added Successfully!");

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("empId").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("dept").value = "";
}

function displayEmployees() {
  let output = "<h3>All Employees</h3>";
  for (let emp of employees) {
    output += `
      Name: ${emp.name} | 
      ID: ${emp.id} | 
      Salary: ₹${emp.salary} | 
      Dept: ${emp.department} <br>
    `;
  }
  document.getElementById("output").innerHTML = output;
}

function filterSalary() {
  let filtered = employees.filter(emp => emp.salary > 50000);
  let output = "<h3>Employees with Salary > ₹50,000</h3>";
  for (let emp of filtered) {
    output += `
      Name: ${emp.name} | 
      Salary: ₹${emp.salary} <br>
    `;
  }
  document.getElementById("output").innerHTML = output;
}

function totalSalary() {
  let total = 0;
  for (let emp of employees) {
    total += emp.salary;
  }
  document.getElementById("output").innerHTML =
    "<h3>Total Salary Payout: ₹" + total + "</h3>";
}

function averageSalary() {
  if (employees.length === 0) {
    document.getElementById("output").innerHTML =
      "<h3>No employee records available</h3>";
    return;
  }

  let total = 0;
  for (let emp of employees) {
    total += emp.salary;
  }
  let avg = total / employees.length;

  document.getElementById("output").innerHTML =
    "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

function countDepartment() {
  let deptName = prompt("Enter Department Name:");
  let count = employees.filter(emp => emp.department === deptName).length;
  document.getElementById("output").innerHTML =
    "<h3>Employees in " + deptName + ": " + count + "</h3>";
}
