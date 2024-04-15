import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colourScheme } from './styles/styles.js';

import { Home } from './components/Home';
import { Pack } from './components/Pack';
import { Label } from './components/Label';
import { Put } from './components/Put';

import { Inventory } from './components/Inventory';

export default function App() {
  const Tab = createBottomTabNavigator();
  const StoreStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
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
          tabBarInactiveTintColor: colourScheme.secondary1
        })}
      >
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Store">
          {() => (
            <StoreStack.Navigator>
              <StoreStack.Screen
                name="Pack"
                component={Pack}
                options={{ title: 'My home' }}
              />
              <StoreStack.Screen
                name="Label"
                component={Label}
              />
              <StoreStack.Screen
                name="Put"
                component={Put}
              />
            </StoreStack.Navigator>
          )}
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
    </NavigationContainer>
  );
}

