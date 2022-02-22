import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { Colors } from '@shared/colors';
import { useNavigation } from '@react-navigation/native';

interface StyledHeaderProps {
    CO?: number;
    PM2_5?: number;
}
const listPollutants = (props: StyledHeaderProps) => {
    const navigation = useNavigation();
    const {CO, PM2_5} = props;
    return (
        <View style={styles.pollutantsView} >
            <View style={styles.headerTextView}>
                <Text style={styles.pollutantsText}>
                    Các chất gây ô nhiễm
                </Text>
            </View>
            <View style={styles.viewDetails}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    navigation.navigate('DetailsInforScreen', { index: 0 });
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={'alert-circle-outline'}
                            color={Colors.COLOR_BUTTON}
                            size={20} />
                        <View style={styles.txtDetails}>
                            <Text style={styles.pollutantsDetailsText}>CO (μm/m3)</Text>
                            <Text style={styles.numberDetailsText}>{CO}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    navigation.navigate('DetailsInforScreen', { index: 1 });
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={'alert-circle-outline'}
                            color={Colors.COLOR_BUTTON}
                            size={20} />
                        <View style={[styles.txtDetails, { borderLeftColor: 'green' }]}>
                            <Text style={styles.pollutantsDetailsText}>PM2.5 (μm/m3)</Text>
                            <Text style={styles.numberDetailsText}>{PM2_5}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = ScaledSheet.create({
    pollutantsView: {
        backgroundColor: Colors.WHITE,
        marginTop: '10@s'
        // width: width,
    },
    headerTextView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    pollutantsText: {
        fontSize: 20,
        color: 'black',
    },
    pollutantsDetailsText: {
        fontSize: 15,
        color: 'black',
    },
    pm25View: {
        flexDirection: 'row',
    },
    numberDetailsText: {
        fontSize: 30,
        color: 'black',
    },
    viewDetails: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    txtDetails: {
        marginLeft: 5,
        borderLeftWidth: 4,
        borderLeftColor: 'green',
        paddingLeft: 15
    },
});

export default listPollutants;
