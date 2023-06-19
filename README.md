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

The application uses a light and dark theme, which can be switched. The themes are defined in theme.ts. This file exports two themes: lightTheme and darkTheme.

The lightTheme and darkTheme are created using the createTheme function from Material UI. They both use a baseTheme, which includes a palette and some component style overrides. The lightTheme and darkTheme extend the baseTheme and add their own custom colors.

The application also uses a GlobalStyle component from Styled Components to apply some global styles. This includes setting the font family and background color.

The typography of the application is defined in Typograghy.ts. This file exports a typography object that includes font weights, sizes, and line heights for different typography variants.

## Layout

The layout of the application is defined in layout.ts. This file exports a Layout component that includes a header, navigation, and main content area.

## Best Practices

In this part of the guide, we share valuable insights on how to make the most of components in your React application. We delve into topics such as how to enhance reusability of components, the use of props for customization, ways to optimize performance, achieving consistent styling with themes, the application of CSS-in-JS for styling, and the benefits of code splitting and lazy loading.

## Accessibility

In this section, we emphasize the significance of accessibility in UI development and offer guidance on the use of ARIA attributes, ensuring keyboard navigation, managing focus, creating accessible form controls, maintaining color contrast, providing effective error messaging, and the use of semantic HTML.

## Responsiveness and Grid System

This segment focuses on the implementation of responsive design using MUI's Grid component, managing component visibility across different screen sizes using the Hidden component, the role of media queries and breakpoints in creating a responsive UI, and the use of typography for responsive font sizes.

## Code Examples and Samples

### Theming

In your application, theming is handled in theme.ts. Here's an example of how you might set up a light and dark theme using Material UI's createTheme function:

```tsx
import { createTheme } from "@material-ui/core/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export { lightTheme, darkTheme };
```

In this example, both the light and dark themes use the same primary and secondary colors, but they have different background colors because of the type property.

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

This repository utilizes the power of `styled-components` for styling components. `styled-components` allows you to write CSS-in-JS and create reusable, styled components.

To use `styled-components` in this repository, follow the guide below:

Import the necessary functions from styled-components and define your styled component. For example, to create a styled button:

```ts
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.bg.light};
  color: ${({ theme }) => theme.text.main};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
```

```tsx
const MyComponent = () => {
  return (
    <>
      <StyledButton>Click Me</StyledButton>
    </>
  );
};

export default MyComponent;
```

In this example, we import styled-components and define a StyledButton component using the styled function. The StyledButton component is then used in the MyComponent component.

## Contribution

Contributions are welcome! If you see an issue or have a feature request, please open an issue. If you'd like to contribute code, please open a pull request.
