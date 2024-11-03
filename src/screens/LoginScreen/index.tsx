import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import {SIZE} from '../../constants/theams';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import {showToast} from '../../utils/toastConfig';
import {signInWithGoogle} from '../../services/authService';

const LoginScreen = ({navigation}: any) => {
  const handleSignIn = async () => {
    try {
      const {success, user, message} = await signInWithGoogle();
      if (!success) {
        showToast(message);
        return;
      }
      navigation.replace('ProfileScreen', {
        ...user,
        screenName: 'LoginScreen',
      });
    } catch (error) {
      showToast('Something went wrong');
    }
  };
  return (
    <SafeAreaWrapper statusbar="#fff">
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.welcomeText}>Hello Welcome back</Text>
          <Text style={styles.discription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            asperiores exercitationem
          </Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSignIn}
            activeOpacity={0.8}>
            <View style={styles.iconDiv}>
              <GoogleIcon width="100%" height="100%" />
            </View>
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SIZE.wp(20 / 4.2),
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: SIZE.wp(28 / 4.2),
    color: '#000',
    marginBottom: SIZE.wp(42 / 4.2),
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: SIZE.wp(20 / 4.2),
    color: '#000',
  },
  discription: {
    fontSize: SIZE.wp(14 / 4.2),
    color: '#888',
    textAlign: 'center',
    marginTop: SIZE.wp(12 / 4.2),
  },
  loginButton: {
    paddingHorizontal: SIZE.wp(20 / 4.2),
    paddingVertical: SIZE.wp(12 / 4.2),
    borderWidth: SIZE.wp(1 / 4.2),
    borderColor: '#888',
    borderRadius: SIZE.wp(12 / 4.2),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: SIZE.wp(80 / 4.2),
  },
  iconDiv: {
    width: SIZE.wp(32 / 4.2),
    height: SIZE.wp(32 / 4.2),
  },
  googleText: {
    fontSize: SIZE.wp(16 / 4.2),
    color: '#444',
    marginLeft: SIZE.wp(12 / 4.2),
  },
});
