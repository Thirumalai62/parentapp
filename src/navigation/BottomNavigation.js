import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../screens/authentication/Login';
import HomeScreen from '../screens/home/HomeScreen';
import NewsScreen from '../screens/news/NewsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Details')}>
//         <Text>Go to Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
function DetailsScreen({navigation}) {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home2"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SettingScreen() {
  return (
    <View>
      <Text>Setting Screen</Text>
    </View>
  );
}

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#29375FCC',
        tabBarActiveTintColor: '#29375F',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            // backgroundColor: '#AD40AF',
          },
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            // backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={({route}) => ({
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={({route}) => ({
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName == 'Details' || routeName === 'Login') {
    return 'none';
  }
  return 'flex';
};

export default BottomNavigation;
