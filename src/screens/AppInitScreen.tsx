import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Navigation from '../navigation/Navigation';

export default function AppInitScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialScreen, setInitialScreen] = useState('LoginScreen');
  const [userData, setUserData] = useState(null);
  async function fetchUserInfo() {
    try {
      const userinfo = await AsyncStorage.getItem('userData');
      if (userinfo != null) {
        const parseUserInfo = JSON.parse(userinfo);
        setUserData(parseUserInfo);
        setInitialScreen('HomeScreen');
      }
    } catch (error) {
      console.log('fetchUserInfo Error', error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (isLoading) {
    return (
      <View style={style.container}>
        <ActivityIndicator size={'large'} color={'green'} />
      </View>
    );
  }

  return <Navigation initialScreen={initialScreen} userData={userData} />;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
