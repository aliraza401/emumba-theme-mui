# React Application with Material UI and Styled Components

This repository contains a React application that uses Material UI and Styled Components for styling. The application includes a theme switcher, routing, and a layout structure.

## Table of Contents

- [Getting Started](#getting-started)
- [App Structure](#app-structure)
- [Routing](#routing)
- [Theming](#theming)
- [Layout](#layout)
- [Best Practices](#best-practices)
- [Responsiveness and Grid System](#responsiveness-and-grid-system)
- [Accessibility](#accessibility)
- [Documentation](#documentation)
- [Code Examples and Samples](#code-examples-and-samples)
- [Contribution](#contribution)

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/gulsicka/uiGuidelinesCode.git
cd uiGuidelinesCode
npm install
npm run dev
```

## App Structure

The main application file is App.tsx. This file sets up the theme provider and the router.

## Routing

The routing for the application is handled in router.ts. This file sets up the routes for the application. It uses the BrowserRouter and Routes components from react-router-dom.

The routes for the application are defined in routes.ts. This file exports three arrays of routes: AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES, and OPEN_ROUTES.

## Theming

The application uses a light and dark theme, which can be switched. The themes are defined in theme.ts. This file exports two themes: lightTheme and darkTheme.

The lightTheme and darkTheme are created using the createTheme function from Material UI. They both use a baseTheme, which includes a palette and some component style overrides. The lightTheme and darkTheme extend the baseTheme and add their own custom colors.

The application also uses a GlobalStyle component from Styled Components to apply some global styles. This includes setting the font family and background color.

The typography of the application is defined in Typograghy.ts. This file exports a typography object that includes font weights, sizes, and line heights for different typography variants.

## Layout

The layout of the application is defined in layout.ts. This file exports a Layout component that includes a header, navigation, and main content area.
