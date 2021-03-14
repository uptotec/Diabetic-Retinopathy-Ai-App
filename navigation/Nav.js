import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CaptureImage from '../screens/CaptureImage';
import HowToUse from '../screens/HowToUse';
import Results from '../screens/Results';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ScanStackNav = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen name="Scan" component={CaptureImage} />
    <Stack.Screen name="Results" component={Results} />
  </Stack.Navigator>
);

const HowToUseStackNav = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen name="How to use" component={HowToUse} />
  </Stack.Navigator>
);

const TabNav = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="How to use"
      component={HowToUseStackNav}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name={focused ? 'information' : 'information-outline'}
            size={22}
            color="#1c88d6"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Scan"
      component={ScanStackNav}
      options={{
        tabBarIcon: ({focused}) => (
          <Icon
            name={focused ? 'eye-check' : 'eye-check-outline'}
            size={22}
            color="#1c88d6"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const Nav = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default Nav;
