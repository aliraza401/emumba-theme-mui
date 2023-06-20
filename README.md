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
- [Code Examples and Samples](#code-examples-and-samples)
- [Usage of Styled Components](#usage-of-styled-components)
- [Contribution](#contribution)

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/aliraza401/emumba-theme-mui.git
cd emumba-theme-mui
npm install
npm run dev
```

## App Structure

The main application file is App.tsx. This file sets up the theme provider and the router.

## Routing

The routing for the application is handled in router.ts. This file sets up the routes for the application. It uses the BrowserRouter and Routes components from react-router-dom.

The routes for the application are defined in routes.ts. This file exports three arrays of routes: AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES, and OPEN_ROUTES.

## Theming

The application uses Material UI for theming, which allows for a consistent design throughout the entire application. It also enables easy switching between light and dark themes. The themes are defined in theme.ts.

A Material UI theme is an object with a structure that Material UI understands. When using the createTheme function from Material UI, you pass in an object that defines the colours, typography, spacing, and more.

Here is a more detailed example of how to setup a theme:

```tsx
import { createTheme } from "@material-ui/core/styles";

const baseTheme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    // additional typography settings...
  },
  // additional base theme settings...
});

const lightTheme = {
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const darkTheme = {
  ...baseTheme,
  palette: {
    type: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

export { lightTheme, darkTheme };
```

In this example, we have a baseTheme that is extended by lightTheme and darkTheme with their specific palette settings. The palette object contains the colours for your theme. The primary and secondary objects within the palette object represent the primary and secondary colour palettes of your theme.

## Layout

The layout of the application is defined in layout.ts. This file exports a Layout component that includes a header, navigation, and main content area.

## Best Practices

In this part of the guide, we share valuable insights on how to make the most of components in your React application. We delve into topics such as how to enhance reusability of components, the use of props for customization, ways to optimize performance, achieving consistent styling with themes, the application of CSS-in-JS for styling, and the benefits of code splitting and lazy loading.

## Accessibility

In this section, we emphasize the significance of accessibility in UI development and offer guidance on the use of ARIA attributes, ensuring keyboard navigation, managing focus, creating accessible form controls, maintaining color contrast, providing effective error messaging, and the use of semantic HTML.

## Responsiveness and Grid System

This segment focuses on the implementation of responsive design using MUI's Grid component, managing component visibility across different screen sizes using the Hidden component, the role of media queries and breakpoints in creating a responsive UI, and the use of typography for responsive font sizes.

## Code Examples and Samples

### Layout

In your application, the layout is defined in layout.ts. Here's an example of how you might set up a layout with a header, navigation, and main content area:

```tsx
import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
```

In this example, the Layout component takes children as a prop and renders them inside the main element. This allows you to wrap any component with the Layout component to include the header and navigation.

## Usage of Styled Components

Styled Components is a CSS-in-JS library that allows you to use component-level styles in your application, which can make managing styles much easier and more efficient.

Styled Components uses tagged template literals to style components and removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles bound to it.

Here's an extended example of how to define and use a styled component:

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

const MyComponent = () => {
  return (
    <>
      <StyledButton>Click Me</StyledButton>
    </>
  );
};

export default MyComponent;
```

In this example, we first create a StyledButton using the styled function from the styled-components library. This component can accept any prop and render it to the DOM, as well as pass it to the styled function. The styled function then returns a new component with the styles applied.

## Theming with Styled Components

Styled components can also access the application theme directly, through the use of the ThemeProvider wrapper. In your CardContainer styled-component, you're accessing your theme's colors:

```tsx
export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.bg.light};
`;
```

In this case, theme is automatically passed as a prop to any styled component that's a child of a ThemeProvider wrapper. You can define your application theme and wrap your application in this provider to give all your styled components access to these theme values. This can help to ensure consistent use of colors, spacing, and other design values across your application.

## Contribution

Contributions are welcome! If you see an issue or have a feature request, please open an issue. If you'd like to contribute code, please open a pull request.
