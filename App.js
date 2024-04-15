import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from './components/Header';
import { TabNav } from './components/TabNav';

export default function App() {
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          header: () => (
            <Header />
          )
        }}>
        {/* <MainStack.Screen
          name="Register"
          component={Home}
        />
        <MainStack.Screen
          name="Login"
          component={Home}
        /> */}
        <MainStack.Screen
          name="Home"
          component={TabNav}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

