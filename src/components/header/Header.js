import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { Colors } from '@shared/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

interface StyledHeaderProps{
    showBackIcon?: boolean;
    onPress?: () => void;
}

const Header = (props: StyledHeaderProps) => {
    const navigation = useNavigation();
    const { showBackIcon, onPress } = props
    return (
        <View style={styles.container}>
            {showBackIcon && <TouchableOpacity style={styles.backBtn} onPress={onPress}>
                <Ionicons name={'arrow-back-outline'} color={Colors.PRIMARY_COLOR} size={28} />
            </TouchableOpacity>}
            <View style={styles.logoView}>
                <Image source={require('@assets/logo.png')} style={styles.logo} resizeMode='center'/>
            </View>
            <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.navigate('InforAQIScreen')}>
                <Ionicons name={'alert-circle-outline'} color={Colors.PRIMARY_COLOR} size={28} />
            </TouchableOpacity>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.SECONDARY_COLOR,
        paddingVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: '5@s',
        backgroundColor: 'white',
        borderBottomWidth: '0.8@s',
        borderBottomColor: Colors.PRIMARY_COLOR
    },
    logo: {
        aspectRatio: 822/251,
        height: 40,
        width: undefined,
    },
    logoView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backBtn:{
        width: '30@s',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;