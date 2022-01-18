import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { viewAQI } from '@shared/viewData';
import { Colors } from '@shared/colors';
import Header  from '@components/header/Header';
import CardDetails from '@components/card/CardDetails';
import ListPollutants from '@components/listPollutants/ListPollutants';
import Chart from '@components/chart/Chart';

const AQIScreen = ({ navigation }) => {
    const [view, setView] = useState();
    const [AQI, setAQI] = useState(null);
    
    useEffect(()=>{
        const aqi = Math.floor(Math.random() * 501);
        setAQI(aqi);
        setView(viewAQI(AQI));  
    },[])
    return (
        <View style={{flex: 1}}>
            <Header showBackIcon/>
            {view == undefined ? 
                <ActivityIndicator size={"large"} color={Colors.TEXT_NORMAL} style={{marginTop: 20}}/> 
                : 
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <CardDetails view={view} AQI={AQI} />{/* AQI tổng quan */}
                    <ListPollutants />{/* Các Chất gây ô nhiễm */}
                    <Chart />{/* BIỂU ĐỒ AQI VÀ CÁC CHẤT KHÁC */}           
                </ScrollView >
            }

        </View>
    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: Colors.GREY,
        flex: 1,
    }
})
export default AQIScreen



