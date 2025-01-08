import type { Component } from 'solid-js';
import { Route, Router } from "@solidjs/router";

import { ThemeProvider } from "@suid/material/styles";
import { createTheme } from "@suid/material/styles";
import FormJs from './pages/FormJs';
import { Header } from './components/Header';
import { Box } from '@suid/material';
import Home from './pages/Home';

import ProjectRequestWizard from './pages/ProjectRequestWizard';

// Create the custom theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920, // add your custom breakpoint value
    },
  },
});

function Layout(props: any) {
  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: "80%", // Set maximum width
          margin: "30px auto", // Center the box
        }}
      >
        {props.children}
      </Box>
    </>
  );
}


export default function App() {
  const base = import.meta.env.MODE === 'production' 
  ? '/data_manager' 
  : '';

  return (
    <ThemeProvider theme={theme}>
        <Router root={Layout} base={base}>
          <Route path="/" component={Home} /> 
          <Route path="/simple-wizard" component={ProjectRequestWizard} />       
        </Router>
    </ThemeProvider>
  );
}
