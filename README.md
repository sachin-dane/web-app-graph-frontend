# CES : Web App

**CES Web APp frontend application built in react**

## Prerequisites:
- GIT
- Node.js  (latest version e.g. v8.10.0)
- NPM (latest version e.g. v6.1.0)

## Getting started

To get the frontend running locally:
- Go to respective clone directory
- `npm install` to install all req'd dependencies
- `npm start` to start the local server
- Once you start nodejs server, then you need to add API end point in front end i.e. web-app-graph-frontend/.env fle
  ![alt text](https://github.com/sachin-dane/web-app-graph-frontend/blob/development/screenshot/env_variable.png)

## Component architecture
  ### Components will be of the following types
  - Container - Stateful component with lifecycle and access to the state tree
  - Steteless/Functional - Simple function that renders an output with little to no logic
  - HOC - A component wrapper. Will enrich a component passed to it



  - `View.js` - The root container where the layout is set
  - The `pages` folder will contain folders each representing a `route` defined in the `View.js` container.
  - All the common/reusable components will be stored in the `ui` folder. The reusable components have to be stateless most of the time unless there is a hard requirement for them to be statefull  
  - 