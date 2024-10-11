import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import AppStack from "./components/stacks/AppStack";
import {PaperProvider, MD3LightTheme, MD3DarkTheme} from "react-native-paper";
import { Colors } from "./components/constants/Colors";
import AuthStack from "./components/stacks/AuthStack";
import AppNav from "./AppNav";
import {AuthProvider} from "./context/AuthContext";

export default function App() {
    const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
    const customLightTheme = { ...MD3LightTheme, colors: Colors.light };
  return (
      <PaperProvider theme={customLightTheme}>
          <AuthProvider>
              <AppNav />
          </AuthProvider>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
