// require Employee model
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //add getRole() to return
    getRole() {
        return 'Intern';
    }

    //add getSchool()
    getSchool() {
        return this.school;
    }
}



//export module
module.exports = Intern;