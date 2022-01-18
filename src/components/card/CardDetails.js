import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from "react-native-linear-gradient";
import { Colors } from '@shared/colors';
import { FaceStatus } from '@components/card/FaceStatus';
import { useNavigation } from '@react-navigation/core';

interface CardStyleProps{
    view?: [];
    AQI?: string;
}

const CardDetails = (props: CardStyleProps) => {
    const { view, AQI } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.AQIView}>
            <View style={styles.locationView}>
                <Text style={styles.locationText}>Địa chỉ đặt thiết bị</Text>
                <Text style={{color: Colors.TEXT_NORMAL}}>Hà Nội, Việt Nam</Text>
            </View>
            <LinearGradient colors={[view.color,"#ffffff"]}>
                <View style={styles.rectangleAQIView}>
                    <TouchableOpacity
                        style={styles.rectangleUpView}
                        activeOpacity={0.9}
                        onPress={() => { navigation.navigate('InforAQIScreen') }}>
                        <View style={[styles.leftRetangle,{ backgroundColor: view.color2}]}>
                            <FaceStatus status={view.faceIcon} style={styles.faceStatus}/>
                        </View>
                        <View style={[styles.betweenRetangle,{ backgroundColor: view.color}]}>
                            <Text style={{ color: 'black', fontSize: 30, fontWeight: '500' }}>{AQI}</Text>
                            <Text style={{ color: 'black', fontSize: 10 }}>AQI VN</Text>
                        </View>
                        <View style={[styles.rightRetangle,{ backgroundColor: view.color}]}>
                            <Text style={[styles.text]}>{view.description}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.rectangleBottomView}>
                        <View style={styles.viewBottom}>
                            <Ionicons name={'thermometer-outline'} size={25} color={'red'} />
                            <Text style={styles.text1}>21 °C</Text>
                        </View>
                        <View style={styles.viewBottom}>
                            <Ionicons name={'ios-water'} size={27} color={'#00B2BF'} />
                            <Text style={styles.text1}>53%</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5, }}>
                    <Text style={{ fontSize: 14, color: 'black'}}>Cập nhật mới nhất 19:00</Text>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = ScaledSheet.create({
    AQIView: {
        backgroundColor: Colors.WHITE,
        // marginBottom: '10@s',
    },
    locationView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '10@s',
    },
    locationText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',

    },
    rectangleAQIView: {
        backgroundColor: Colors.WHITE,
        margin: '10@s',
        borderRadius: 10,
        height: '130@s',
        marginTop: '20@s',
    },
    rectangleUpView: {
        marginTop: '3@s',
        marginLeft: '3@s',
        marginRight: '3@s',
        backgroundColor: Colors.UNHEALTHY_3,
        borderRadius: 10,
        height: '80@s',
        flexDirection: 'row',
    },
    leftRetangle: {
        backgroundColor: Colors.UNHEALTHY_3_2,
        width: '100@s',
        borderBottomLeftRadius: 10,
        borderTopStartRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    betweenRetangle: {
        width: '100@s',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightRetangle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    rectangleBottomView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center',
    },
    viewBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    text1: {
        color: 'black',
        marginLeft: '10@s',
        fontSize: 20
    },
});
export default CardDetails;

