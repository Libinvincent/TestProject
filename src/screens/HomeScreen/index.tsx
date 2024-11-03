import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../layout/SafeAreaWrapper';
import {SIZE} from '../../constants/theams';
import ScreenHeader from '../../components/ScreenHeader';
import ProfileIcon from '../../assets/icons/profile.svg';

const HomeScreen = ({navigation, route}: any) => {
  const {email, name, photo} = route.params;
  const RightIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.arrowStyle}
        onPress={() =>
          navigation.navigate('ProfileScreen', {email, name, photo})
        }>
        <ProfileIcon width={'100%'} height={'100%'} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaWrapper statusbar="#FFFCF1">
      <View style={styles.container}>
        <ScreenHeader title={`Hello, ${name}`} rightIcon={<RightIcon />} />
        <View style={styles.bottomContainer}>
          <Text style={styles.welcomeText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aperiam nemo hic necessitatibus atque similique eos illo, dicta
            cumque deleniti ipsa quis enim beatae fugiat esse ad dolorum odit
            distinctio!
          </Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: SIZE.wp(20 / 4.2),
    paddingTop: SIZE.wp(24 / 4.2),
  },
  arrowStyle: {
    width: SIZE.wp(32 / 4.2),
    height: SIZE.wp(32 / 4.2),
  },
  welcomeText: {
    fontSize: SIZE.wp(14 / 4.2),
    color: '#000',
    fontWeight: '400',
  },
});
