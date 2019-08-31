# IAC-SOC-FRONTEND

**IAC SOC frontend application built in react**

## Prerequisites:
- GIT
- Node.js (latest
- Optional
  - Visual Studio Code (VSCode))

## Getting started

To get the frontend running locally:

- `npm install` to install all req'd dependencies
- `npm start` to start the local server

## Folder structure

```
├── config
│   ├── env.js
│   ├── paths.js
│   ├── utils.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.devServer.js
│   └── webpack.prod.js
├── keycloak.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api
│   │   ├── apiUtils.js
│   │   └── rulesApi.js
│   ├── App.js
│   ├── assets
│   │   └── style
│   │       ├── app.css
│   │       ├── appStyles.scss
│   │       ├── commonComponents.scss
│   │       ├── commonLayout.scss
│   │       ├── themeColors.scss
│   │       └── variables.scss
│   ├── constants
│   │   └── actions.js
│   ├── helpers
│   │   ├── ability.js
│   │   ├── ErrorBoundary.js
│   │   ├── mock.js
│   │   └── userAbilities.js
│   ├── index.html
│   ├── index.js
│   ├── server.js
│   ├── state
│   │   ├── actions
│   │   │   ├── loginActions.js
│   │   │   ├── rulesActions.js
│   │   │   └── usersActions.js
│   │   ├── reducers
│   │   │   ├── appReducer.js
│   │   │   ├── rootReducer.js
│   │   │   └── rulesReducer.js
│   │   ├── sagas
│   │   │   ├── rootSaga.js
│   │   │   └── RulesSaga.js
│   │   ├── schemas.js
│   │   ├── state.js
│   │   └── store.js
│   ├── static
│   │   └── images
|   |
│   └── views
│       ├── pages
│       │   ├── Analyze
│       │   │   ├── Analyze.js
│       │   │   └── Logs
│       │   │       └── Logs.js
│       │   ├── Configure
│       │   │   └── Configure.js
│       │   ├── Dashboard
│       │   │   └── Dashboard.js
│       │   └── Incidents
│       │       └── Incidents.js
│       ├── ui
│       │   ├── BreadCrumb.js
│       │   └── Navbar.js
│       └── View.js
└── webpack.config.js
```
## Component architecture
  ### Components will be of the following types
  - Container - Stateful component with lifecycle and access to the state tree
  - Steteless/Functional - Simple function that renders an output with little to no logic
  - HOC - A component wrapper. Will enrich a component passed to it


  ### Layout of the components
  ```
  └── views
    ├── pages
    │   ├── Analyze
    │   │   ├── Analyze.js
    │   │   └── Logs
    │   │       └── Logs.js
    │   ├── Configure
    │   │   └── Configure.js
    │   ├── Dashboard
    │   │   └── Dashboard.js
    │   └── Incidents
    │       └── Incidents.js
    ├── ui
    │   ├── BreadCrumb.js
    │   └── Navbar.js
    └── View.js

  ```  

  The above is the layout of the react components.
  - `View.js` - The root container where the layout is set
  - The `pages` folder will contain folders each representing a `route` defined in the `View.js` container.
  - Every root route `e.g. /analyze, /dashboard` will have a folder in `views` and that folder will contain the `container components and stateless components` for that route
  - With in the folder for a root route there can be multiple container components that can be put into a folder of their own e.g. `Analyze/Logs/Logs.js`.
  - The main container component will contain the routes for all the `sub-containers` e.g. `Analyze/Analyze.js` contains routes `logs, rules, reports`
  - All the common/reusable components will be stored in the `ui` folder. The reusable components have to be stateless most of the time unless there is a hard requirement for them to be statefull  
  - 