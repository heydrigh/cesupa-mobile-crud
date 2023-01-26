import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from './routes';
import { RootStackParamList } from './types';
import Home from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name={ScreenName.Home} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
