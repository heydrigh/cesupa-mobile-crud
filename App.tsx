import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
              <Text>Hello World</Text>
            </View>
          </GestureHandlerRootView>
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
