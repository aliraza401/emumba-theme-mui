# React Application with MUI and Styled Components

This repository contains a React application that uses MUI and Styled Components for styling. The application includes a theme switcher, routing, and a layout structure.

## Table of Contents

- [Getting Started](#getting-started)
- [Why Mui](#why-mui)
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

## Why Mui

When it comes to building stunning user interfaces, MUI stands out as a remarkable choice. Here are some of the key benefits that make MUI the perfect companion for our projects:

Component Library: MUI provides a wide variety of pre-built and customizable components, such as buttons, forms, navigation bars, and data grids. This extensive component library saves time and effort during development.

Responsive Design: MUI is designed to be responsive, enabling the creation of applications that adapt seamlessly to different screen sizes. It ensures a consistent and visually pleasing experience across desktops, tablets, and mobile devices.

Theming Capabilities: MUI offers robust theming capabilities, allowing easy customization of the application's appearance to align with the brand identity. It provides options to define colors, typography, spacing, and create dark or light themes.

Design Language and Guidelines: MUI follows the principles of Material Design, a widely recognized design language developed by Google. By utilizing MUI, developers can leverage the well-established design system, ensuring intuitive and user-friendly interfaces.

Active Community and Support: MUI benefits from a vibrant community of developers, providing resources, tutorials, and discussions. The MUI team also provides regular updates, bug fixes, and new features, ensuring developers stay up-to-date.

## App Structure

The main application file is App.tsx. This file sets up the theme provider and the router.

## Routing

The routing for the application is handled in router.ts. This file sets up the routes for the application. It uses the BrowserRouter and Routes components from react-router-dom.

The routes for the application are defined in routes.ts. This file exports three arrays of routes: AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES, and OPEN_ROUTES.

## Theming

For projects to maintain a consistent look and feel, the theming aspect of MUI plays a very vital role. Why is theming important? Well, there are a few reasons. First, theming helps with branding and identity. It lets developers match the visual style of an application to the brand's identity and design guidelines. This means that the UI can reflect the brand's personality and create a recognizable identity across various projects.

Consistency is another big benefit of theming. With a well-defined theme, developers can make sure that the UI components, like buttons, forms, and navigation elements, all have a consistent look and behavior. This consistency makes the user experience more intuitive and familiar because users can easily recognize and interact with familiar design patterns.

Theming also makes development more efficient and reusable. By applying a shared theme, developers don't have to individually style each component. They can just apply the theme to the whole project, which saves time and effort. It also ensures that UI elements are styled consistently and follow the design guidelines.

Another advantage of theming is scalability and maintainability. As projects grow and change over time, theming makes it easier to make global design changes. Instead of going through each component to update the style, developers can simply update the theme settings, like colors or typography, in one place. This makes it easier to manage and evolve the UI design as needed.

Finally, theming can cater to user preferences and improve accessibility. Themes can offer options for light and dark modes, allowing users to choose their preferred color scheme. Themes can also be designed with accessibility in mind, meeting contrast requirements and supporting readable typography. This makes the UI more inclusive and usable for all users.

In MUI, theming is a powerful feature that lets developers customize the visual aspects of components to fit their project's needs. MUI provides a theming system that gives precise control over colors, typography, spacing, and other style attributes. This allows developers to create visually appealing and consistent UI designs while still having flexibility and customization options.

Thhis application uses MUI for theming, which allows for a consistent design throughout the entire application. It also enables easy switching between light and dark themes. The themes are defined in theme.ts.

A MUI theme is an object with a structure that MUI understands. When using the createTheme function from MUI, you pass in an object that defines the colours, typography, spacing, and more.

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

Styling in MUI is a fundamental aspect of creating visually appealing and consistent user interfaces. MUI provides a comprehensive set of tools and approaches to handle styling in a flexible and efficient manner. With MUI, you have multiple options for styling your components, including the legacy @mui/styles package (which uses JSS), as well as the recommended @mui/system package. The @mui/system package offers compatibility with both JSS and Emotion, allowing you to choose your preferred styling approach. Whether you opt for the legacy solution or embrace the newer @mui/system package, MUI provides a range of components, theming capabilities, and customization options to ensure your application's look and feel aligns with your desired design and branding. This empowers developers to create visually stunning interfaces, while also ensuring maintainability, code modularity, and a consistent user experience across their projects.

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

Styled Components ThemeProvider is a wrapper component that provides a theme to all React components underneath itself via the context API. In this application, we are using it to pass the theme to all the styled-components in our application.

### Using the ThemeProvider

The ThemeProvider component should be wrapped around the root component of your application, typically App. Here's an example of how to use the ThemeProvider based on your code:

```tsx
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { Router } from "./router/router";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
    </ThemeProvider>
  );
}

export default App;

```

### Global Styles with Styled Components

Styled Components provides a helper function called createGlobalStyle for defining global styles in your application. createGlobalStyle is a standard styled component but it does not generate a React component. Instead, it generates a styled component which, when rendered, injects its styles into the global scope.

Here's an example from code:

```tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    background-color: ${({ theme }) => theme.bg.main};
  }
  .cursor-pointer {
    cursor: pointer;
  }
`;

export default GlobalStyle;
```

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
