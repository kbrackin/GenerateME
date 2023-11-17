// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ''
  }
  else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-cyan)`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license =='None') {
    return ''
  }
  else {
    return '[License](#license)'
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  }
  else {
    return `
    
    ## License

    This application is licensed using the ${license} license.
    `
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.pTitle}
  ## ${renderLicenseBadge(data.pLicense)}

## Description

${data.pDesc}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)${renderLicenseLink(data.pLicense)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.pInstall}

## Usage

${data.pUsage}

## Contributing

${data.pContribute}${renderLicenseSection(data.pLicense)}

## Questions

For more of my projects, please visit https://github.com/${data.username}

Do you have questions or suggestions for this application?
Contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
