// add function to create the team
const createTeam = team => {
    // need to add html portion for manager
    const createManager = manager => {
        return `
        <div class='card employee-card'>
        <div class='card-header'>
        <h3 class='card-title'>${manager.getName()}</h3>
        <h4 class='card-title'><i class='mr-2'></i>${manager.getRole()}
        </h4>
        </div>
        <div class='card-body'>
        <ul class='list-group'>
        <li class='list-group-item'>ID: ${manager.getId()}
        </li>
        <li class='list-group-item'>EMAIL: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}
        </a>
        </li>
        <li class='list-group-item'>PHONE NUMBER: ${manager.getPhoneNumber()}
        </li>
        </ul>
        </div>
        </div>
        `;
    };

    //need to add html portion for engineer
    const createEngineer = engineer => {
        return `
        <div class='car employee-card'>
        <div class='card-header'>
        <h3 class='card-title'>${engineer.getName()}
        </h3>
        <h4 class='card-title'><i class="mr-2'></i>${engineer.getRole()}
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
        <div class='card-header'>
        <h3 class='card-title'>${intern.getName()}
        </h3>
        <h4 class='card-title'><i class='mr-2'></i>${intern.getRole()}
        </h4>
        </div>
        <div class='card-body'>
        <ul class='list-group'>
        <li class='list-group-item'>ID: ${intern.getId()}
        </li>
        <li class='list-group-item'>EMAIL: <a href='mailto:${intern.getEmail()}'>$${intern.getEmail()}
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
    <title>Team Profile</title>
    <link rel='stylesheeet' href='./style.css'>
</head>
<body>

<div class ='container-fluid'>
<div class='row'>
<div class='col-12 jumbotron mb-3 team-heading'>
<h1 class='text-center'>Team Profile</h1>
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