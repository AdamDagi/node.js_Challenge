// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, userName, repoName) {
  if (license == "MIT License") {
    return `[![License](https://img.shields.io/badge/License-MIT-lightblue.svg)](https://choosealicense.com/licenses/mit/)`;
  }
  if  (license == "The Unlicense") {
    return `[![License](https://img.shields.io/badge/License-Unlicense-lightblue.svg)](https://choosealicense.com/licenses/unlicense/)`;
  }
  return ``;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT License") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  }
  if  (license == "The Unlicense") {
    return `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`;
  }
  return ``;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  }
  const licenseLink = renderLicenseLink(license);
  return `
   ### **License**
   
   ${licenseLink}
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License, data.GitHubUserName, data.GitHubRepo);
  const licenseSection = renderLicenseSection(data.License);
  // const licenseLink = renderLicenseLink(data.License);

  return ` 
  ${licenseBadge}
  ### **Title**  <br />
      ${data.Title}

  ### **Description** <br />
      ${data.Description}

  ### **Content** <br />
      ${data.Content}
  
  ### **Instalation** <br />
      ${data.Instalation}

  ### **Usage** <br />
      ${data.Usage}

  ### **Contributing** <br />
      ${data.Contributing}

  ### **Tests** <br />
      ${data.Tests}

  ### **Questions** <br />
  [GitHub Profile](https://github.com/${data.GitHubUserName}) <br />
  For aditional questions you can contact me via e-mail: ${data.email} <br /><br />
  
  ${licenseSection}
  `;
};

module.exports = generateMarkdown;

