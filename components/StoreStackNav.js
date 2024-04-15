import { createStackNavigator } from '@react-navigation/stack';

import { Pack } from './Pack';
import { Label } from './Label';
import { Put } from './Put';

export const StoreStackNav = () => {
  const StoreStack = createStackNavigator();

  return (<StoreStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
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
  )
};
