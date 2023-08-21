# IssueTracker
An Issue Tracker is a web application that helps you manage and track issues, tasks, and projects. This repository contains the codebase for the Issue Tracker application.

Folder Structure
- /config
  - mongoose.js
- /controllers
  - home_controller.js
  - project_controller.js
- /models
  - Issue.js
  - project.js
- /routes
  - index.js
  - project.js
- /assets
  - filterIssues.js
  - searchIssues.js   
-- /views
  - /partials
  - footer.ejs
  - header.ejs
  - issue_form.ejs
  - issues.ejs
  - project_form.ejs
  - home.ejs
  - layout.ejs
  - project.ejs
 - /index.js
 - package-lock.json
 - package.json 
- /public
  - styles.css
 
  #  Setup
1. Clone this repository to your local machine.
2. Navigate to the project folder in the terminal.
3. Run npm install to install the required packages.
4. Create a .env file and configure your environment variables.
- app.js
- package.json
- README.md

  DATABASE_URL=your-database-url
PORT=3000

# Running the Application
1. Run node app.js to start the server.
2. Open a web browser and navigate to http://localhost:3000 to access the application.

# Usage
* Visit the homepage to see a list of issues.
* Click on an issue to view its details.
* Create, update, and delete issues using the provided forms and buttons.
