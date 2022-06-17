
class EmployeePayrollData {
id;
salary;
startDate;

constructor(id,name,salary){
this.id = id;
this.salary=salary;
this.name=name
}

get name() {
    return this._name;
}

set name(name) {
    this._name = name;
}



toString() {
    
    return "Id = " + this.id + ", Name = " + this.name + ",  Salary = " + this.salary ;
}
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());
