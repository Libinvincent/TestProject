import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZE} from '../../constants/theams';

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};
type buttonProps = {
  title: string;
  onPress: () => void;
  textColor?: string;
  bgColor?: string;
};

const ButtonComponent = ({title, onPress, textColor, bgColor}: buttonProps) => {
  return (
    <TouchableOpacity
      style={[styles.confirmButton, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const LogoutModal = ({visible, onClose, onConfirm}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Confirm Logout</Text>
          <Text style={styles.message}>Are you sure you want to logout?</Text>

          <View style={styles.buttonContainer}>
            <ButtonComponent
              title="Cancel"
              onPress={onClose}
              textColor="#333"
              bgColor="#ddd"
            />
            <ButtonComponent
              title="Logout"
              onPress={onConfirm}
              textColor={COLORS.white}
              bgColor={'#E72727'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    padding: SIZE.wp(20 / 4.2),
    borderRadius: SIZE.wp(12 / 4.2),
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  title: {
    fontSize: SIZE.wp(20 / 4.2),
    fontWeight: 'bold',
    marginBottom: SIZE.wp(24 / 4.2),
  },
  message: {
    fontSize: SIZE.wp(16 / 4.2),
    textAlign: 'center',
    marginBottom: SIZE.wp(32 / 4.2),
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZE.wp(12 / 4.2),
  },
  confirmButton: {
    flex: 1,
    paddingVertical: SIZE.wp(12 / 4.2),
    borderRadius: SIZE.wp(6 / 4.2),
    backgroundColor: '#ddd',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: SIZE.wp(16 / 4.2),
    color: '#333',
  },
});
