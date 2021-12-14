// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Login } from './pages';

function App() {
  return (
    
    <NavigationContainer>
      <Router/>      
    </NavigationContainer>
  );
}

export default App;