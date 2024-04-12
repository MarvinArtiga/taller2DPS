import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SolarSystemScreen from './screens/SolarSystemScreen';
import EarthScreen from './screens/EarthScreen';
import SunScreen from './screens/SunScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sistema Solar" component={SolarSystemScreen} />
        <Tab.Screen name="Tierra" component={EarthScreen} />
        <Tab.Screen name="Sol" component={SunScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
