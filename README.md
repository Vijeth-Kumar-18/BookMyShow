# BookMyShow Clone

BookMyShow-2.0 is a web application built using **React.js** and **Bootstrap** that closely mimics the design and functionalities of the original BookMyShow platform. The goal is to create a visually appealing and responsive web application that allows users to browse and book tickets for movies, events, and sports.

## Tech Stack
- **Frontend**: React.js
- **Styling**: Bootstrap

## Features

- User-friendly interface.
- Wide variety of options for movies, events, and sports.
- Built with React for a dynamic and responsive experience.
- Styled using Bootstrap for a modern and consistent design.

## Project Setup

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed on your system:
- A terminal or command prompt.
- A code editor like [Visual Studio Code](https://code.visualstudio.com/).
- [npm](https://www.npmjs.com/) (comes with Node.js).

### Step-by-Step Setup

1. **Create a New React App**  
   Open your terminal and run the following command to create a new React application:
   ```bash
   npx create-react-app bookmyshow-clone
   ```
   Navigate into the project directory:
   ```bash
   cd bookmyshow-clone
   ```

2. **Install Required Dependencies**  
   Install `react-bootstrap` and `bootstrap` for styling:
   ```bash
   npm install react-bootstrap bootstrap
   ```

   Install `react-router-dom`:
   ```bash
   npm install react-router-dom
   ```

   
   Add the Bootstrap CSS to your project by including the following line in `src/index.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

3. **Clone the Repository**  
   If you are working with an existing repository, clone it instead:
   ```bash
   git clone https://github.com/Vijeth-Kumar-18/BookMyShow.git
   cd BookMyShow
   ```

4. **Install Project Dependencies**  
   If you cloned the repository, install the required dependencies:
   ```bash
   npm install
   ```

5. **Start the Development Server**  
   Run the following command to start the application:
   ```bash
   npm start
   ```
   This will open the application in your default browser at `http://localhost:3000`.


## Folder Structure

- `src/`: Contains the source code of the application.
  - `pages/`: Includes individual page components like `AboutUs.jsx`.
  - `components/`: Reusable components used across the application.
- `public/`: Static files and the HTML template.

## Acknowledgements

This project is inspired by the original [BookMyShow](https://in.bookmyshow.com/) platform.
