class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //add getName() to return name of the e
    getName() {
        return this.name;
    }
    //add getId() to return employeeId
    getId() {
        return this.id;
    }
    //add getEmail() to return email
    getEmail() {
        return this.email;
    }
    //add getRole() to return Employee
    getRole() {
        return 'Employee';
    }
}







module.exports = Employee;