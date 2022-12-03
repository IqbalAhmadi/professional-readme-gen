// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use the application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license does your application is covered under?',
    choices: ['MIT', 'Apache', 'Boost', 'BSD'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Is there any contributions?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Is there any test required for your application to run?',
    default: 'npm test', // if left empty
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('Success. Your README.md file has been successfully generated.')
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = 'README.md'

    fs.writeFile(filename, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    )
  })
}

// Function call to initialize app
init()
