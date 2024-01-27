# Blog Web Application

This web application is a simple blog that interacts with a Dummy API to display posts, comments, and user information. The project aims to showcase various functionalities within a limited timeframe.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Authentication](#authentication)
- [Data Persistence](#data-persistence)
- [UI Design](#ui-design)
- [Testing](#testing)
- [Deployment](#deployment)

## Getting Started

To run this project locally, follow the steps below:

1. Clone the repository: `git clone https://github.com/stivenm16/Users.git`
2. Install dependencies: `npm install`
3. Create a `.env.local` file with necessary environment variables.
4. Run the development server: `npm run dev`

## Features

- View posts with main images, tags, and the user who published them.
- Click on a post to view its comments, if available.
- List available tags and filter posts accordingly.
- List of users.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Dummy API (for fetching posts, comments, and user information)

## Project Structure

The project is organized into several components and hooks to maintain a clean and modular codebase. Key folders include:

- `src/components`: React components (e.g., Post, Comment, Modal).
- `src/hooks`: Custom hooks (e.g., usePosts for managing posts and data).
- `src/auth`: Different views/pages of the application where an user has to be logged to navigate on.
- `src/api`: Different routes of the application where the client can make its petitions.
- `src/api/auth`: Guard validation using next-auth for routes protection
- `public`: Public assets and index.html.

## Setup

Before running the application, make sure to create a `.env.local` file with the necessary environment variables.

## Usage

Once the project is set up, you can navigate through the different views, view posts, comments, and user information. Use the tag filter to refine your post search. In this case it's not necesary to create an account, by now login is just validating that the form has been filled up, for practical exercices you can use:

    ```
        email: test@test.com
        password: 12345
    ```

## Authentication

The application implements basic auth using next-auth.

## UI Design

The UI design of the application is based on the creative preferences of the developer.

## Deployment

The project is deployed on vercel due to there by now Next.js doesn't support static site generators using dynamic routes, aiming on delivery the same product, you can check the application here [App Link](https://users-teal.vercel.app/).
