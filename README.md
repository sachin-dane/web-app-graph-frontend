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
- You can acces application on 'http://0.0.0.0:8080/' or 'http://localhost:8080/'

## Test Accounts
  ### Admin Account
  - admin@mail.com / admin@123

  ### Admin Account
  - rober_downey@mail.com / robert@123
  - chris_hemsworth@mail.com / chris@123
  - bradley_cooper@mail.com / bradley@123
  - matt_damon@mail.com / matt@123

  ### Reviewer Account
  - dwayne_johnson@mail.com /dwayne@123


## Sites
  ### Active Sites
  - Natural Gas
  - Hospitality
  - Automobile
  - Power Generation

  ### Proposed Sites
  - Textile Industry
  - Plastic 

  ### Inactive Sites
  - Electronics 
  - IT Industry

## Component architecture
  ### Components will be of the following types
  - Container - Stateful component with lifecycle and access to the state tree
  - Steteless/Functional - Simple function that renders an output with little to no logic
  - HOC - A component wrapper. Will enrich a component passed to it



  - `View.js` - The root container where the layout is set
  - The `pages` folder will contain folders each representing a `route` defined in the `View.js` container.
  - All the common/reusable components will be stored in the `ui` folder. The reusable components have to be stateless most of the time unless there is a hard requirement for them to be statefull  
  - 