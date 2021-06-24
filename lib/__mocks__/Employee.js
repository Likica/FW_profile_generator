module.exports = function () {
    this.name = 'London England';
    this.id = 23;
    this.email = 'lEngland@myemail.com';
    this.role = 'employee';

    this.getName = () => this.name;
    this.getId = () => this.id;
    this.getEmail = () => this.email;
    this.getRole = () => this.role;
}