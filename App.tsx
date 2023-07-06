import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Router from './src/router';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <Home /> */}
      <Router />
    </SafeAreaView>
  );
}

export default App;
