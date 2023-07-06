import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';

const Router = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default Router;
