# Test task for the vacancy: Full stack Vue/Node.js developer. At 3205.Team

## Overview
This is a single-page application (SPA) built with Vue.js for the frontend and Node.js with Express for the backend. The application allows users to search for other users by email and number from a given JSON dataset.

## Features
- Form with email (required) and number (optional) fields.
- Email field validation.
- Number field formatting.
- 5-second delay in backend response to simulate long processing time.
- Canceling previous requests on re-submission.
- Displaying search results under the form.
- Error handling and loading state indication.

## Getting Started

## Documentation

### Dependencies
  - `axios`
  - `body-parser`
  - `core-js`
  - `cors`
  - `express`
  
## Setup Instructions

### Prerequisites
- Node.js & npm
- Vue CLI

### Running the Application
1. Clone the repository: 
  ```bash
  git clone https://github.com/Arshynbeek/3205.Team-Test.git
  ```

2. Navigate to the project directory: 
  ```bash
  cd 3205.Team-Test
  ```

3. Installation of all external libraries: 
  ```bash
  npm install
  ```

4. Launch server (backend): 
  ```bash
  node index.js
  ```

6. Open a new terminal and navigate to the frontend directory: 
  ```bash 
  cd frontend
  ```

7. **(OPTIONAL)** If you don't have Vue CLI, install it using this command:
  ```bash
  npm install
  ```
8. Launch frontend:
  ```bash
  npm run serve
  ```

These steps will start this project.
If an error is detected in the terminal, check whether hosts 3000 & 8080 are busy on your machine.

## Usage
After launching the application, you can access the web interface through your browser at `http://localhost:8080`.