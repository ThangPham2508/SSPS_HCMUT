# SSPS_HCMUT - Code
## Description
This repository contains the code for a Student Smart Printing Service. The code is organized as follows:

- frontend: This folder contains the source code for the front-end web application, which is built with React. The src folder includes the following subfolders and files:
  - assets: This folder contains images, icons, fonts and other static files used by the web app.
  - components: This folder contains reusable React components.
  - pages: This folder contains the React components for each page of the web app.
  - slices: This folder contains the Redux slices for managing the state of the web app.
  - main.jsx: This file is the entry point of the web app, which renders the App component and sets up the Redux store and router.
- backend: This folder will contain the source code for the back-end server, which will handle the communication with the - printers and the database. The folder includes the following subfolders and files:
  - config: This folder contains configuration files for the server. It includes db.js, which is used to configure the database connection.
  - controllers: This folder contains the logic for handling different routes. Each controller corresponds to a specific route and contains the logic for handling requests to that route.
  - data: This folder contains any static data or files that the server needs to use.
  - middlewares: This folder contains middleware functions that are used to process requests before they reach the controllers.
  - models: This folder contains the data models for the application. These models define the structure of the data in the database.
  - routes: This folder contains the route definitions for the server. Each file in this folder corresponds to a different endpoint on the server.
  - server.js: This is the entry point for the server. It sets up the server, connects to the database, and starts listening for requests.


## Instruction
### Prerequisites
- NodeJS v18.13.0 or higher
- npm v8.19.3 or higher
#### Check your version with
```
node --version
npm --version
```

### Usage
#### Install Dependencies
```
cd frontend
npm install
```
#### Run
- Make sure you are in frontend folder.
```
npm run dev
```

