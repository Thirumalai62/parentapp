import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/Onboarding';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={OnboardingScreen}
          name="OnboardingScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
