import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SIZE} from '../constants/theams';
import BackArrow from '../assets/icons/arrow-back.svg';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  isBack?: boolean;
  rightIcon?: React.ReactNode;
};
const ScreenHeader = ({title, isBack = false, rightIcon}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.rowStyle}>
        {isBack && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
        )}
        <Text style={styles.tetileText}>{title}</Text>
      </View>
      {rightIcon}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: SIZE.wp(20 / 4.2),
    paddingVertical: SIZE.wp(16 / 4.2),
    backgroundColor: '#FFFCF1',
    borderBottomWidth: SIZE.wp(1 / 4.2),
    borderColor: '#F5F0DF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tetileText: {
    fontSize: SIZE.wp(18 / 4.2),
    color: '#000',
    fontWeight: '500',
    marginLeft: SIZE.wp(12 / 4.2),
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
