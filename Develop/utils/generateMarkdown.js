// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    return `\n * [License](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `## License
    This projects is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
//? Is this the easiest & shoertest way to do it? Needs clarification on this one.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 
  ## Description
  ๐ ${data.description}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) 
  * [contribution](#contributing)
  * [Test](#test)
  * [GitHub](#github)
  * [Email](#email)
  
  ## Installation
  ๐พ ${data.installation}

  ## Usage
  ๐ป ${data.usage}

  ## License
  ๐ ${data.license}

  ## Contribution
  ๐จโ๐จโ๐งโ๐ฆ ${data.contributing}

  ## Test
  ๐ ${data.test}

  ## Contact
  - [github]('https://github.com/${data.github}')
  - [email]('https://github.com/${data.email}')


<br/>

_This README was generated with โค๏ธ by Iqbal Ahmadi ๐_

`
}

module.exports = generateMarkdown
