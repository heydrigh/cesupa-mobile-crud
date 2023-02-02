import 'react-native-get-random-values';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import Navigation from './src/routes';
import theme from './src/styles/theme';
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
