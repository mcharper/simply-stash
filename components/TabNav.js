import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Home } from './Home';
import { Inventory } from './Inventory';
import { StoreStackNav } from './StoreStackNav';

import { colourScheme } from '../styles/styles.js';

export const TabNav = () => {
  const Tab = createBottomTabNavigator();
  const StoreStack = createStackNavigator();

  return (<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Store') {
          iconName = 'cube';
        } else if (route.name === 'Find') {
          iconName = 'search';
        } else if (route.name === 'Browse') {
          iconName = 'list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colourScheme.accent1,
      tabBarInactiveTintColor: colourScheme.secondary1,
      headerShown: false
    })}
  >
    <Tab.Screen name="Home" component={Home} />

    <Tab.Screen name="Store"
      component={StoreStackNav}>
    </Tab.Screen>

    <Tab.Screen name="Find">
      {() => (
        <StoreStack.Navigator>
          <StoreStack.Screen
            name="Find"
            component={Inventory}
          />
        </StoreStack.Navigator>
      )}
    </Tab.Screen>

    <Tab.Screen name="Browse">
      {() => (
        <StoreStack.Navigator>
          <StoreStack.Screen
            name="Browse"
            component={Inventory}
          />
        </StoreStack.Navigator>
      )}
    </Tab.Screen>
  </Tab.Navigator>
  );
}


