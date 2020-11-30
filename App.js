import React from 'react';
import {StatusBar} from 'react-native';
import Nav from './navigation/Nav';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Nav />
    </>
  );
};

export default App;
