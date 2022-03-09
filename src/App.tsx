import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MultiStepForm } from './components/MultiStepForm';
import { CssBaseline, Container, Box } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Box marginTop={10}>
          <MultiStepForm
            onSubmit={(values) => {
              console.log('Form Submitted', values);
            }}
          />{' '}
        </Box>
      </Container>
    </div>
  );
}

export default App;
