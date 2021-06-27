// add function to create the team
const createTeam = team => {
    // need to add html portion for manager
    const createManager = manager => {
        return `
        <div class='card employee-card'>
        <div class='card-header text-center'>
        <h3 class='card-title text-center'>${manager.getName()}</h3>
        <h4 class='card-title role text-center'><i class='mr-2'></i>${manager.getRole()}
        </h4>
        </div>
        <div class='card-body'>
        <ul class='list-group'>
        <li class='list-group-item'>ID: ${manager.getId()}
        </li>
        <li class='list-group-item'>EMAIL: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}
        </a>
        </li>
        <li class='list-group-item'>TEL#: ${manager.getPhoneNumber()}
        </li>
        </ul>
        </div>
        </div>
        `;
    };

    //need to add html portion for engineer
    const createEngineer = engineer => {
        return `
        <div class='card employee-card'>
        <div class='card-header text-center'>
        <h3 class='card-title text-center'>${engineer.getName()}
        </h3>
        <h4 class='card-title role text-center'><i class='mr-2 role'></i>${engineer.getRole()}
        </h4>
        </div>
        <div class='card-body'>
        <ul class='list-group'>
        <li class='list-group-item'>ID: ${engineer.getId()}
        </li>
        <li class='list-group-item'>EMAIL: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}
        </a>
        </li>
        <li class='list-group-item'>GITHUB: <a href='https://github.com/${engineer.getGithub()}'
        target='_blank' >${engineer.getGithub()}
        </a>
        </li>
        </ul>
        </div>
        </div>
        `;
    };

    //need to add html portion for intern
    const createIntern = intern => {
        return `
        <div class='card employee-card'>
        <div class='card-header text-center'>
        <h3 class='card-title text-center'>${intern.getName()}
        </h3>
        <h4 class='card-title role text-center' ><i class='mr-2 role'></i>${intern.getRole()}
        </h4>
        </div>
        <div class='card-body'>
        <ul class='list-group'>
        <li class='list-group-item'>ID: ${intern.getId()}
        </li>
        <li class='list-group-item'>EMAIL: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}
        </a>
        </li>
        <li class='list-group-item'>SCHOOL: <a ${intern.getSchool()}'>${intern.getSchool()}
        </a>
        </li>
        </ul>
        </div>
        </div>
        `;
    };

    const html = [];

    html.push(team.filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join('')
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join('')
    );

    return html.join('');
}

// geenerate the complete page - need export function for this
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel='stylesheet' href='../dist/style.css'>
    <title>Team Profile</title>
</head>
<body>

<div class ='container-fluid'>
<div class='row'>
<div class='col-12 jumbotron team-heading'>
<h1 class='text-center'  style='font-size: 80px'>Team Profile</h1>
</div>
</div>
</div>
<div class='container'>
<div class='row'>
<div class='team-area col-12 d-flex justify-content-center'>
${createTeam(team)}
</div>
</div>
</div>
</body>
</html>
    `;
};