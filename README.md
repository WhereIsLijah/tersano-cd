# Tersano Project

The Tersano Project is a comprehensive application designed to streamline product management with robust user authentication. Developed using modern web technologies, this project is structured into a client-server architecture where the front-end and back-end communicate efficiently to provide a seamless user experience.

## Technologies

This project leverages the following technologies:

- **Front-end**: React with TypeScript
- **Back-end**: Express in TypeScript

## Core Features

### User Authentication

- **Login**: Users can log in to access the product management features.
- **Sign Up**: New users can register, enhancing the application's accessibility.

### Product Management

- **Product Listing**: Authenticated users can view a list of products.
- **Add/Delete Products**: Users can manage product entries by adding new products or deleting existing ones.
- **Product Attributes**: Each product features essential details such as Name, Price, and Description.

## API Development

The back-end includes RESTful APIs that provide the following functionalities:

- **Product Addition and Deletion**: Secure endpoints that allow authenticated users to add or delete product entries.
- **Authentication**: APIs that handle user authentication and ensure secure access to the application.

## Frontend-Backend Communication

- The application implements effective methods for data exchange between the front-end and the back-end, ensuring data integrity and responsiveness.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. This will be needed to run the project locally.

### Dev Dependencies

- **typescript**: Adds static types to JavaScript
- **@types/express, @types/mongoose, etc.**: Type definitions for Express, Mongoose, and other libraries
- **nodemon**: Utility that automatically restarts node application when file changes
- **ts-node**: TypeScript execution environment and REPL
- **react**: A JavaScript library for building user interfaces
- **axios**: Promise based HTTP client for the browser and node.js
- **react-router-dom**: DOM bindings for React Router
- **@testing-library/react**: Simple and complete testing utilities to interact with DOM nodes

### Installing

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/tersanoproject.git
cd tersanoproject

### Install dependencies
npm install

# Run the server
npm start

# Navigate to the client directory
cd ../client

# Install dependencies
npm install

# Run the client
npm start
```

## Usage
After starting both the server and client:

Open http://localhost:3000 in a web browser to access the application.
Log in or register to manage products.