const Employee = require('./Employee');

//Enginneer extends Employee model
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //add getRole
    getRole() {
        return 'Engineer';
    }
    //add getGithub
    getGithub() {
        return this.github;
    }
}


//export model
module.exports = Engineer;
