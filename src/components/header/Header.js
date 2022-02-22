import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@shared/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

interface StyledHeaderProps {
  showBackIcon?: boolean;
  onPress?: () => void;
}

const Header = (props: StyledHeaderProps) => {
  const navigation = useNavigation();
  const {showBackIcon, onPress} = props;
  return (
    <View style={styles.header}>
      {showBackIcon && (
        <TouchableOpacity style={styles.backBtn} onPress={onPress}>
          <Ionicons
            name={'arrow-back-outline'}
            color={Colors.PRIMARY_COLOR}
            size={28}
          />
        </TouchableOpacity>
      )}
      <View style={[styles.logoView, {justifyContent: showBackIcon ? 'center' : undefined}]}>
        <Image
          source={require('@assets/logoImage.png')}
          style={styles.logo}
          resizeMode="center"
        />
        <Text style={styles.logoText}>AQIOT</Text>
      </View>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate('InforAQIScreen')}>
        <Ionicons
          name={'alert-circle-outline'}
          color={Colors.PRIMARY_COLOR}
          size={28}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  header: {
    alignItems: 'center',
    height: '50@s',
    borderBottomWidth: '0.8@s',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: '5@s',
},
  logo: {
    aspectRatio: 1,
    height: 40,
    width: undefined,
  },
  logoView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5@s',
  },
  backBtn: {
    width: '30@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '10@s',
  }
});

export default Header;
