# Health Challenge Tracker

## Live Demo **[Here](https://health-tracker-4asjs8oaw-pramodtejras-projects.vercel.app/).**

This project is an Angular-based single-page application (SPA) for tracking user workouts, including user name, workout type, and workout minutes. The app allows users to add their workout details, search, filter, and paginate through the workout list. Additionally, it includes an optional feature for displaying workout progress using charts.

## Features
- Add a user with name, workout type, and workout minutes.
- Display users' workouts in a table format.
- Search users by name.
- Filter users by workout type.
- Pagination for listing users.
- Optionally, display workout progress using charts (using `ngx-charts` or `chart.js`).

## Table of Contents
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Unit Tests](#unit-tests)
- [Screenshots](#screenshots)

## Installation

Follow these steps to get the **Health Challenge Tracker** running on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/PramodTejra/Health-Tracker.git
```

### 2. Install Dependencies

Navigate into the project folder and install the required dependencies using npm:

```bash
cd Health-Tracker
npm install
```

## Running Locally

Once the dependencies are installed, you can run the application locally.

### 1. Run the Development Server

Start the Angular development server with the following command:

```bash
npm start
```

The application will be accessible at **[http://localhost:4200](http://localhost:4200)**.

### 2. Run Server-Side Rendering (SSR)

For Server-Side Rendering (SSR) support, use this command:

```bash
npm run serve:ssr:health-challenge-tracker
```

You can access the SSR version of the app at **[http://localhost:4000](http://localhost:4000)**.

## Project Structure

Here is an overview of the main directories in the project:

```plaintext
Health-Tracker/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # Angular services
│   │   ├── app.module.ts    # Angular module
│   │   └── app.component.ts # Root component
├── node_modules/            # Project dependencies
├── package.json             # NPM configuration and dependencies
├── angular.json             # Angular CLI configuration
└── README.md                # Project documentation
```

## Technologies Used

- **Angular 14+**: For building the application frontend.
- **ngx-charts & chart.js**: For rendering interactive and responsive charts.
- **PrimeNG**: UI component library for Angular.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **TypeScript**: For writing strongly typed JavaScript code.
- **Node.js**: For backend/server-side rendering.

## Unit Tests

This project contains unit tests for the following components:

- **Component Tests**: Tests for the user workout list component.
- **Service Tests**: Tests for the service managing user data.

To run unit tests and generate a code coverage report, use the following command:

```bash
ng test --code-coverage
```

Ensure that the test coverage is **100%** for both components and services.



## Screenshots

Here are some screenshots of the app:

- **Workout Entry Screen**: The screen where users can add their workout information.
  ![image](https://github.com/user-attachments/assets/91b9eb57-bbfe-4309-b04b-5d1e08e4839d)

- **Workout List Screen**: Displays the user workout list with search and filter options.
 ![image](https://github.com/user-attachments/assets/895e10ed-9344-4efc-b04b-1b078b7504a6)

- **User Progress Screen**: Displays a selected user's workout progress with a visual chart representation.
  ![image](https://github.com/user-attachments/assets/077e9584-1bf2-404b-a2b2-efb9e9c978f6)

