import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const COLORS = {
  black: '#000',
  white: '#fff',
};

export const SIZE = {
  width: width,
  height: height,
  hp: hp,
  wp: wp,
};
