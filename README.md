# React & TypeScript Dictionary App - A Frontend Mentor Challenge

![Design preview for the Dictionary web app coding challenge](./preview.jpg)

[![Node.js][node-version]][node-url]
[![pnpm][pnpm-version]][pnpm-url]
[![React][react-version]][react-url]
[![TypeScript][typescript-version]][typescript-url]
[![Tailwind CSS][tailwindcss-version]][tailwindcss-url]
[![ESLint][eslint-version]][eslint-url]
[![Prettier][prettier-version]][prettier-url]
[![Vite][vite-version]][vite-url]
[![License: MIT][license-shield]][license-url]

## Welcome! 👋

Thank you for checking out this coding challenge from Frontend Mentor. This dictionary web app is built as a solution to the challenge, showcasing real-world coding skills by creating a functional, responsive, and accessible web application.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Live Project](#live-project)
- [Features](#features)
  - [Accessibility and UX Enhancements](#accessibility-and-ux-enhancements)
- [Advanced Theming with TailwindCSS](#advanced-theming-with-tailwindcss)
- [Custom Hooks](#custom-hooks)
- [My Experience](#my-experience)
- [Local Installation and Setup](#local-installation-and-setup)
  - [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [New Component Generator](#new-component-generator)
  - [Usage Example](#usage-example)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview

This dictionary web app is developed to be a user-friendly and responsive tool for word searches and definitions, leveraging the [Free Dictionary API](https://dictionaryapi.dev/).

### The Challenge

The goal was to build a dictionary app that adheres to [Frontend Mentor's design challenge](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL) criteria. This included ensuring a clean and responsive design, accessibility compliance, and effective integration of external APIs.

### Live Project

Check out the Dictionary Web App in action: [View Live](https://ucod3.github.io/dictionary-web-app-react-ts)

## Features

- Word search functionality with input validation.
- Displaying definitions, synonyms, and audio pronunciations.
- Responsive layout for various devices.
- Dark and light mode switcher.
- Dynamic font switching.

### Accessibility and UX Enhancements

- Enhanced keyboard navigation with visible outlines in the primary color, ensuring a better experience for non-mouse users.
- Customized scroll bar styling with the primary theme color for a cohesive visual experience across different browsers and platforms.

## Advanced Theming with TailwindCSS

In this project, I've implemented an advanced theming system using CSS variables integrated with TailwindCSS. This setup enables a dynamic switch between light and dark modes, showcasing the versatility of TailwindCSS when combined with native CSS features. The theming is not only responsive but also adapts to user preferences, providing an engaging and accessible user experience.

## Custom Hooks

The development of several custom hooks and components was pivotal in enhancing the functionality and efficiency of the codebase. Key implementations include:

- **useSearchWord**: Manages word search functionality and API interactions, showcasing the use of asynchronous operations within React for dynamic data fetching.

- **useFont**: Demonstrates the dynamic management of font styles using React's Context API, enabling consistent styling across the application.

- **useTheme**: Controls the theme settings of the app, illustrating effective state management and context usage in React.

- Other notable implementations include **FontProvider**, **WordDisplay**, **NotFound**, **LoadingSpinner**, **ThemeProvider and ThemeSwitcher**. ach playing a crucial role in enhancing the app's functionality and user experience.

## My Experience

This project marked my second venture with React and TypeScript and my first integration of Tailwind CSS into this mix. The experience offered a new perspective on building responsive and visually appealing interfaces. Learning to use Tailwind CSS alongside React's component structure and TypeScript's type safety was enlightening. The project also introduced me to using the useSWR hook for efficient data fetching.

## Local Installation and Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (20.10.0 or later)
- `pnpm` for efficient package management

Follow these steps to set up and run the project locally using `pnpm`:

1. **Clone the Repository**: Start by cloning the repository to your local machine. Replace `new-directory-name` with the desired name for your project directory. This command clones the repository into a new directory named `new-directory-name` in your current location.

   ```shell
   git clone https://github.com/ucod3/dictionary-web-app-react-ts.git

   ```

2. **Install pnpm**: If you don't already have pnpm, you can install it globally using npm. This is only needed if you haven't installed pnpm before:

   ```shell
   npm install -g pnpm
   ```

3. **Install Dependencies**: Navigate to the project directory and use pnpm to install the dependencies:

   ```shell
   cd [project-directory]
   pnpm install
   ```

4. **Start the Development Server**: To run the project locally, start the development server with pnpm:

   ```shell
   pnpm run dev
   ```

5. **Access the Project**: The project will be available at `http://localhost:5173` or on another port if this one is in use. Check the terminal output to confirm the port. Open this URL in your browser to view and interact with your project.

## Technologies Used

This project utilizes a blend of technologies, each selected for its specific benefits:

- **React**: Chosen for its component-based architecture, enabling the development of a dynamic and interactive user interface.

- **TypeScript**: Provides type safety, enhancing code quality and developer experience, especially useful in a component-based architecture like React.

- **Tailwind CSS**: A utility-first CSS framework used for its efficiency in building custom designs rapidly, greatly improving the app's responsiveness and style flexibility.

- **Vite**: Selected for its fast build times and efficient development server, which enhances the overall development experience.

- **ESLint & Prettier**: These tools ensure consistent code formatting and quality, aligning with best coding practices.

- [**useSWR**](https://swr.vercel.app/)
  : A React hook utilized for its simplicity and efficiency in data fetching, offering a streamlined way to retrieve and manage external data.

- **API**: The [Free Dictionary API](https://dictionaryapi.dev/) provides comprehensive dictionary data, crucial for the app's core functionality.

## New Component Generator

This project includes a script for generating new components. You can run this script using the following command:

### Usage Example

To create a new TypeScript component named 'MyComponent':

```bash
pnpm run new-component MyComponent
```

This will create a folder name MyComponent and the following files within it:
MyComponent.tsx
index.ts

## Author

- Frontend Mentor - [@ucod3](https://www.frontendmentor.io/profile/ucod3)
- LinkedIn- [@iusmanb](https://www.linkedin.com/in/iusmanb/)

## Acknowledgments

Special thanks to Frontend Mentor for this challenge. I also want to acknowledge the following resources that were instrumental in the development of this project:

- **Boilerplate**: [ucod3/react-vite-typescript-tailwind-boilerplate](https://github.com/ucod3/react-vite-typescript-tailwind-boilerplate).

- **new-component** script: [Josh W Comeau's new-component](https://github.com/joshwcomeau/new-component).

## License

This project is licensed under the MIT License - see the [LICENSE.MD](./LICENSE.MD) file for details.

[node-version]: https://img.shields.io/badge/Node.js-v21.2.0-10B67F.svg
[node-url]: https://nodejs.org/en/
[pnpm-version]: https://img.shields.io/badge/pnpm-^8.11.0-10B67F.svg
[pnpm-url]: https://pnpm.io/
[react-version]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ucod3/react-vite-typescript-tailwind-boilerplate/main/package.json&query=$.dependencies.react&label=React&color=10B67F
[react-url]: https://reactjs.org/
[typescript-version]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ucod3/react-vite-typescript-tailwind-boilerplate/main/package.json&query=$.devDependencies.typescript&label=TypeScript&color=10B67F
[typescript-url]: https://www.typescriptlang.org/
[tailwindcss-version]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ucod3/react-vite-typescript-tailwind-boilerplate/main/package.json&query=$.devDependencies.tailwindcss&label=Tailwind%20CSS&color=10B67F
[tailwindcss-url]: https://tailwindcss.com/
[eslint-version]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ucod3/react-vite-typescript-tailwind-boilerplate/main/package.json&query=$.devDependencies.eslint&label=ESLint&color=10B67F
[eslint-url]: https://eslint.org/
[prettier-version]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ucod3/react-vite-typescript-tailwind-boilerplate/main/package.json&query=$.devDependencies.prettier&label=Prettier&color=10B67F
[prettier-url]: https://prettier.io/
[vite-version]: https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/ucod3/react-vite-typescript-tailwind-boilerplate/main/package.json&query=$.devDependencies.vite&label=Vite&color=10B67F
[vite-url]: https://vitejs.dev/
[license-shield]: https://img.shields.io/badge/License-MIT-10B67F.svg
[license-url]: ./LICENSE.MD
