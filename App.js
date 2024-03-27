import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

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
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Store') {
              iconName = focused ? 'arrow-up-circle' : 'arrow-up-circle-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'list' : 'list-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Store">
          {() => (
            <StoreStack.Navigator>
              <StoreStack.Screen
                name="Pack"
                component={Pack}
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

        {/* <Tab.Screen name="Retrieve">
          {() => (
            <StoreStack.Navigator>
              <StoreStack.Screen
                name="Locate"
                component={Locate}
              />
              <StoreStack.Screen
                name="Retrieve"
                component={Retrieve}
              />
              <StoreStack.Screen
                name="Transfer"
                component={Transfer}
              />
            </StoreStack.Navigator>
          )}
        </Tab.Screen> */}

        <Tab.Screen name="List">
          {() => (
            <StoreStack.Navigator>
              <StoreStack.Screen
                name="Inventory"
                component={Inventory}
              />
            </StoreStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

