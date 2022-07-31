// This is the template I created to take the users information and put it into an html file. 
var generateTeam =  (team) => {
    var makeManager = (manager) => {
        return `
     <div class="container">
        <div class="row"><div class="team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
             </div>
             <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
             </div>
            </div>
        </div>
     </div>
    `;
};
    var makeEngineer = (engineer) => {
        return `
    <div class="container">
        <div class="row"><div class="team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">gitHub: <a href="https://github.com/${engineer.getGitHub()}>${engineer.getGitHub()}</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    `;
    };
    var makeEngineer = (engineer) => {
        return `
    <div class="container">
        <div class="row"><div class="team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">gitHub: <a href="https://github.com/${engineer.getGitHub()}>${engineer.getGitHub()}</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    `;
    };
    var makeintern = (intern) => {
        return `
     <div class="container">
        <div class="row"><div class="team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
             </div>
             <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getGitHub()}</li>
                </ul>
             </div>
            </div>
        </div>
     </div>
    `;
    };
}

module.exports = (team) => {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href = "style.css"/>
    <title>My Team</title>   
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };