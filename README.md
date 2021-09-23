# Open LXP

[![Version](https://img.shields.io/badge/version-prototype-yellow)](https://github.com/OpenLXP/openlxp-xms-ui)
[![yarn](https://img.shields.io/badge/yarn-1.22.1-blue)](https://yarnpkg.com/)
[![license](https://img.shields.io/badge/license-Apache_2.0-green)](https://github.com/OpenLXP/openlxp-xms-ui/blob/main/LICENSE)

[![react](https://img.shields.io/badge/react-17.0.1-61dafb)](https://reactjs.org/)
[![router](https://img.shields.io/badge/router-5.2.0-red)](https://reactrouter.com/web/guides/quick-start)
[![tailwind](https://img.shields.io/badge/tailwind-2.2.2-22d3ee)](https://redux-toolkit.js.org/)

## Table of content

- [**Installation**](#installation)
  - [Clone Project](#clone-project)
- [**Getting started**](#getting-started)
  - [Installation](#installation)
    - [_Install Project Dependencies_](#install-project-dependencies)
  - [Environment Variables](#environment-variables)
    - [_REACT_APP_XIS_CATALOGS_API_](#react-app-xis-catalogs-api)
    - [_REACT_APP_XIS_COMPOSITELEDGER_API_](#react-app-xis-compositeledger-api)
  - [Creating a local env](#creating-a-local-environment-file)
    - [_Walk through_](#walk-through)
    - [_Template_](#env-template)
  - [Important Notes](#important-notes)
- [**Available Scripts**](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
  - [yarn coverage](#yarn-coverage)

---

## Installation

### Clone Project

```bash
git clone git@github.com:OpenLXP/openlxp-xms-ui.git
```

### Install Project Dependencies

Start off by verifying that you have `yarn` installed.

```ps1
yarn -version
```

If `yarn` is not installed use the following command to install it. This will install the `yarn` package manager globally on your system.

_**global install**_

```ps1
npm install yarn -g
```

_**local install**_

```ps1
npm install yarn
```

Once yarn has been installed you will need to install the project dependencies. Using the following command we will manually set your yarn version for this project.

```ps1
yarn set version 1.22.1
```

After the version has been installed and set we will install the dependencies. Using the following command we will install all the project dependencies.

```bash
yarn install package.json
```

---

## Getting started

### Environment Variables

This project makes use of globally available environment variables. Below are the required environment variables required for this project.

#### **REACT_APP_XIS_CATALOGS_API**

This is the root API endpoint used by the application to access XIS catalogs.

```yaml
http://<YOUR_BACKEND_ENDPOINT>/api/catalogs/
```

#### **REACT_APP_XIS_COMPOSITELEDGER_API**

This is the endpoint for accessing the XIS compositeledger.

```yaml
http://<YOUR_BACKEND_ENDPOINT>/es-api/
```

#### **REACT_APP_XIS_EXPERIENCES_API**

This is the root API endpoint used by the application to access XIS experiences. 

```yaml
http://<YOUR_BACKEND_ENDPOINT>/api/experiences/
```

### Creating a local environment file

#### **Walk through**

Let's create a local `.env.local` file. If you are in a code editor you can right click and create new file.

![vscode create new file](./readme-assets/vscode-create-new-file.png)

If you are using the terminal use the following command to create a new file.

_**bash command**_

```bash
touch <PATH_TO_YOUR_PROJECT_ROOT>/.env.local
```

_**powershell**_

```ps1
New-Item -Path <PATH_TO_YOUR_PROJECT_ROOT>\.env.local -ItemType File
```

Navigate to the newly created file and paste the template (_below_) into the file. Replace `<YOUR_BACKEND_ENDPOINT>` with your localhost setup **or** your live endpoint.

#### **.env Template**

```text
REACT_APP_XIS_CATALOGS_API=<YOUR_BACKEND_ENDPOINT>/api/catalogs/
REACT_APP_XIS_COMPOSITELEDGER_API=<YOUR_BACKEND_ENDPOINT>/api/metadata/
REACT_APP_XIS_EXPERIENCES_API=<YOUR_BACKEND_ENDPOINT>/api/experiences/
```

### Important Notes

To use this piece of code without any issues you will need the XMS component to accompany it.

[OpenLXP XMS](https://github.com/OpenLXP/openlxp-xms)

### **You're all set! Explore the commands below to run, build, or test the app.**

---

## Available Scripts

In the project directory, you can run the following.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn coverage`

Launches the test runner with coverage mode enabled.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---