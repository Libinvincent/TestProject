import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import AppInitScreen from './src/screens/AppInitScreen';
import configureGoogleSignIn from './src/services/googleSignInConfig';

const App = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);
  return (
    <SafeAreaProvider>
      <AppInitScreen />
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
