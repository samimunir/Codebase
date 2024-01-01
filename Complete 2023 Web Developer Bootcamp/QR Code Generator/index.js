import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL",
        }
    ])
    .then((answers) => {
        // console.log(answers);
        const url = answers.URL;
    })
    .catch((error) => {
        if (error.isTtyError) {
            // prompt couldn't be rendered in the current environment
        } else {
            // something else went wrong
        }
    });