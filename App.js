import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/navigation/AuthStack';
// import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomNavigation /> */}
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
