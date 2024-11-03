import {GoogleSignin} from '@react-native-google-signin/google-signin';

const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '457744497053-nskkbjvcmi932df3huhk7s1r2rpirosf.apps.googleusercontent.com',

    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    offlineAccess: true,
    forceCodeForRefreshToken: true,
    profileImageSize: 120,
  });
};

export default configureGoogleSignIn;
