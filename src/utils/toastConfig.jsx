import Toast from 'react-native-toast-message';

export const showToast = (
  message = '',
  toastType = 'success',
  position = 'top',
  visibilityTime = 3000,
  swipeable = true,
) => {
  Toast.show({
    type: toastType,
    text1: message,
    position: position,
    visibilityTime: visibilityTime,
    swipeable: swipeable,
  });
};
