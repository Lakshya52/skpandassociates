# skpandassociates

This is a website for skpandassociates, a professional CA firm. The website is built with React, Vite, and Tailwind CSS, and it features a clean, professional design with smooth animations.

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: For routing and navigation within the application.
- **AOS (Animate on Scroll)**: For scroll-triggered animations.
- **GSAP (GreenSock Animation Platform)**: For high-performance animations.
- **EmailJS**: For sending emails from the client-side.
- **Lucide React**: For beautiful and consistent icons.

## Project Structure

The project follows a standard Vite + React project structure:

-   `src/`: This directory contains all the source code for the application.
    -   `assets/`: Contains static assets like images, icons, and fonts.
    -   `components/`: Contains reusable React components, such as the Navbar and Footer.
    -   `pages/`: Contains the main pages of the website.
    -   `main.jsx`: The entry point of the React application.
    -   `App.jsx`: The root component of the application, where routing is handled.
-   `public/`: This directory contains public assets that are not processed by the build tool.
-   `dist/`: This directory contains the optimized production build of the application.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Serves the production build locally for preview.
-   `npm run compress-images`: Compresses images in the `src/assets` directory.

## How to Run the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Lakshya52/skpandassociates.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd skpandassociates
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
The application will be available at `http://localhost:5173`.
