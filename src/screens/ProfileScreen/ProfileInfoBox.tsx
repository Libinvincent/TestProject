import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SIZE} from '../../constants/theams';

type Props = {
  label: string;
  value: string;
};

const ProfileInfoBox = ({label, value}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default ProfileInfoBox;

const styles = StyleSheet.create({
  label: {
    fontSize: SIZE.wp(14 / 4.2),
    color: '#888888',
    marginBottom: SIZE.wp(4 / 4.2),
    fontWeight: '500',
  },
  container: {
    paddingVertical: SIZE.wp(12 / 4.2),
    paddingHorizontal: SIZE.wp(16 / 4.2),
    borderRadius: SIZE.wp(6 / 4.2),
    borderWidth: SIZE.wp(1 / 4.2),
    borderColor: '#C0C0C0',
    backgroundColor: '#FFFFFF',
  },
  value: {
    fontSize: SIZE.wp(14 / 4.2),
    color: '#333333',
    fontWeight: '400',
  },
});
