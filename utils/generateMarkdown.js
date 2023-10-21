// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license){
    case 'MIT':
      return `![Badge](https://img.shields.io/badge/License-MIT-yellow)`;
      break;
    
    case 'Apache 2.0':
      return `![Badge](https://img.shields.io/badge/License-Apache_2.0-green)`;
      break;

    case 'GNU General Public':
      return `![Badge](https://img.shields.io/badge/License-GPL_v3-blue)`;
      break;

    case 'GNU Lesser General Public':
      return `![Badge](https://img.shields.io/badge/License-LGPL_v3-blue)`;
      break;

    case 'Mozilla Public License':
      return `![Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen)`;
      break;

    default:
      return '';
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) { return ''; }
  else { return `[LICENSE.md](license)` }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) { return ''; }
  else {
    let badge = renderLicenseBadge(license);
    let link = renderLicenseLink(license);
    return `${badge}<br>
    This project is licensed under the ${license} License - see the ${link} file for details`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, install, usage, credits, license, contributing, testMethods, authorGit, authorEmail} = data;
  escapeChar(data);
  let badge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license);
  return `# ${title}
${badge}
    
## Description
    
${description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${install}
    
## Usage
    
${usage}<br>
Sample link format for adding screenshots saved in assets/images folder to README.<br>
![alt text](assets/images/screenshot.png)
    
## Credits
    
${credits}

    
## License
${licenseSection}    
 
## How to Contribute
    
${contributing}
    
## Tests
    
${testMethods}
    
## Questions
Repository contact: @${authorGit} <br>
If you have any questions or issues relating to this project, you can also contact the owner via ${authorEmail}.
`;
}

//A helper function for escaping any backtick chars given in user response
function escapeChar(data) {
  for (let response of Object.keys(data)) {
    if (data[response].includes("`")) {
      data[response] = data[response].replaceAll("`","\\\`"); 
    }
  }
  return data;
}


module.exports = { generateMarkdown }
