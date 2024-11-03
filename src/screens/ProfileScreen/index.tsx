import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SIZE} from '../../constants/theams';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import ProfileInfoBox from './ProfileInfoBox';
import LogoutModal from './LogoutModal';
import ScreenHeader from '../../components/ScreenHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const ProfileScreen = ({navigation, route}: any) => {
  const {email, name, photo, screenName} = route?.params;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogout = async () => {
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('userData');
    setIsModalVisible(false);
    navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
  };

  const handleSubmit = () => {
    if (screenName === 'LoginScreen') {
      navigation.replace('HomeScreen', route?.params);
    } else {
      setIsModalVisible(true);
    }
  };
  return (
    <SafeAreaWrapper statusbar="#FFFCF1">
      <View style={styles.container}>
        <ScreenHeader
          title="Profile"
          isBack={screenName === 'LoginScreen' ? false : true}
        />
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.profileIcon}>
              <Image source={{uri: photo}} style={styles.imageStyle} />
            </View>
            <View style={{gap: SIZE.wp(12 / 4.2)}}>
              <ProfileInfoBox label="Name" value={name} />
              <ProfileInfoBox label="Email" value={email} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.8}
            onPress={handleSubmit}>
            <Text style={styles.logoutText}>
              {screenName === 'LoginScreen' ? 'Continue' : 'Logout'}
            </Text>
          </TouchableOpacity>
        </View>
        <LogoutModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onConfirm={handleLogout}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SIZE.wp(20 / 4.2),
    paddingVertical: SIZE.wp(42 / 4.2),
    justifyContent: 'space-between',
  },
  profileIcon: {
    width: SIZE.wp(90 / 4.2),
    height: SIZE.wp(90 / 4.2),
    borderRadius: SIZE.wp(45 / 4.2),
    borderColor: '#D9D9D9',
    alignSelf: 'center',
    marginBottom: SIZE.wp(40 / 4.2),
    borderWidth: SIZE.wp(1 / 4.2),
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  logoutButton: {
    backgroundColor: '#2196F3',
    paddingVertical: SIZE.wp(12 / 4.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE.wp(8 / 4.2),
    borderWidth: SIZE.wp(1 / 4.2),
    borderColor: '#2196F3',
  },
  logoutText: {
    color: '#fff',
    fontSize: SIZE.wp(16 / 4.2),
    fontWeight: '500',
  },
});
