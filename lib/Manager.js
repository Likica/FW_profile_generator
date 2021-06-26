//require my Employee model
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, phoneNumber) {
        super(name, id, email);
        this.phoneNumber = phoneNumber;
    }

    //add getRole() to return Manager
    getRole() {
        return 'Manager';
    }
    //add getPhoneNumber()
    getPhoneNumber() {
        return this.phoneNumber;
    }
}


//export model
module.exports = Manager;