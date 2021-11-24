// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT License") {
    return `![License Badge](https://img.shields.io/github/license/AdamDagi/node.js_Challenge?color=orange&label=License&logo=AIOHTTP&style=plastic)`;
  }
  if  (license == "The Unlicense") {
    return `![License Badge](https://img.shields.io/badge/Twitter-Profile-informational?style=flat&logo=twitter&logoColor=white&color=1CA2F1)`;
  }
  return ` `
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
  const licenseBadge = renderLicenseBadge(data.License);
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
      ${data.GitHub}

   ${licenseSection}
  `;
};

module.exports = generateMarkdown;
