import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();

    if (isSuccessResponse(response)) {
      const {user, idToken, serverAuthCode} = response.data;
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify({...user, idToken, serverAuthCode}),
      );
      return {
        success: true,
        user: {...user, idToken, serverAuthCode},
        message: 'Sign in successful',
      };
    } else {
      return {
        success: false,
        message: 'Sign in was cancelled by user',
        user: null,
      };
    }
  } catch (error: any) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          return {
            success: false,
            message: 'Sign in already in progress',
            user: null,
          };
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          return {
            success: false,
            message: 'Play services not available',
            user: null,
          };
        default:
          return {
            success: false,
            message: 'Something went wrong',
            user: null,
          };
      }
    } else {
      return {
        success: false,
        message: 'Something went wrong',
        user: null,
      };
    }
  }
};
