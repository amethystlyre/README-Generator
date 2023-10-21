// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) { return ''; }
  else { return `![Badge](https://img.shields.io/badge/License-${license}-brightgreen)` }
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
  if (!license) { return 'NA'; }
  else {
    let badge = renderLicenseBadge(license);
    let link = renderLicenseLink(license);
    return `${badge}
    This project is licensed under the ${license} License - see the ${link} file for details`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, install, usage, credits, license, contributing, testMethods, queryAuthor } = data;
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
- [Questions for author](#questions-for-author)
    
## Installation
    
${install}
    
## Usage
    
${usage}
Sample link format for adding screenshots saved in assets/images folder to README.
![alt text](assets/images/screenshot.png)
    
## Credits
    
${credits}

    
## License
${licenseSection}    
 
## How to Contribute
    
${contributing}
    
## Tests
    
${testMethods}
    
## Questions for author
    
${queryAuthor}
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
