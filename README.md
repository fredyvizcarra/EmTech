# EmTech - ReactJs

## Description

This project is a middleware API built using NestJS to consume the Marvel public API. It provides endpoints to retrieve a list of Marvel characters and detailed information about specific characters.

## Business Features

- **Student Profiles:** Display student profiles with details such as name, state, and country.
- **Global Partnerships:** Display a carousel of partner company logos.
- **Responsive Design:** Ensure an optimal user experience on both mobile and desktop devices.

## Technical Features

- **Modern Frontend:**
  Developed using React for an interactive and dynamic user interface.
  Implementation of Tailwind CSS for efficient and responsive design.
- **API Integration:**
  Use of the RandomUser API to fetch real-time student data.
  Dynamic data presentation through asynchronous fetch.
- **Environment Variables:** Secure handling of URLs and API keys through environment variables.
- **Reusable Components:** Creation of reusable components for images, student cards, and accordion items.
- **Deployment:** Configured for deployment on Netlify, with necessary settings and environment variables.

## Requirements

- Node.js (latest LTS version recommended)
- ReactJS
- Vite
- Git for version control
- TailwindCss

## Installation and Usage

### Local Development

1. Clone the repository:
   ```sh
   git clone https://github.com/fredyvizcarra/EmTech.git
   ```
2. Navigate to the project folder:
   ```sh
   cd EmTech
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   npm install
   ```
4. Create a .env file by copying .env.example and filling in the required environment variables:
   ```sh
   cp example.env .env
   # Edit .env file to set the correct values
   ```
5. Build the project:
   ```sh
   npm run build
   ```
6. Start the application in development mode:
   ```sh
   npm run dev
   ```
7. Open the application:
   ```sh
   Open your browser and navigate to http://localhost:3000 (or the port specified by Vite).
   ```
### Accessing the Application

- **Local Development:** The app will be running on `http://localhost:3000`.
- **Production:** The app will be running on the URL provided by Netlify. `https://sparkling-biscuit-b2c482.netlify.app`.
  
## Environment Variables

The application requires the following environment variables to be set:

- **VITE_STUDENTS_API**: https://randomuser.me/api/?results=4&nat=us
