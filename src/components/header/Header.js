import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    logo: {
        aspectRatio: 822/251,
        height: 40,
        width: undefined
    }
});

export class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('@assets/logo.png')} style={styles.logo} resizeMode='center'/>
            </View>
        );
    }
}