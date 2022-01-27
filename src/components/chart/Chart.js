import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, Bar } from "victory-native";
import { Colors } from '@shared/colors';
import { ScaledSheet } from 'react-native-size-matters';
import PrimaryButton from "@components/common/PrimaryButton";
import moment from "moment";
import ChartContent from './VictoryChart';

const formatTime = (time) => {
    return moment(time).format('DD-MM-YYYY, HH:mm');
}

const data = [
    { x: 0, y: Math.floor(Math.random() * 200) + 30 },
    { x: 1, y: Math.floor(Math.random() * 200) + 30 },
    { x: 2, y: Math.floor(Math.random() * 200) + 30 },
    { x: 3, y: Math.floor(Math.random() * 200) + 30 },
    { x: 4, y: Math.floor(Math.random() * 200) + 30 },
    { x: 5, y: Math.floor(Math.random() * 200) + 30 },
    { x: 6, y: Math.floor(Math.random() * 200) + 30 },
    { x: 7, y: Math.floor(Math.random() * 200) + 30 },
    { x: 8, y: Math.floor(Math.random() * 200) + 30 },
    { x: 9, y: Math.floor(Math.random() * 200) + 30 },
    { x: 10, y: Math.floor(Math.random() * 200) + 30 },
    { x: 11, y: Math.floor(Math.random() * 200) + 30 },
    { x: 12, y: Math.floor(Math.random() * 200) + 30 },
    { x: 13, y: Math.floor(Math.random() * 200) + 30 },
    { x: 14, y: Math.floor(Math.random() * 200) + 30 },
    { x: 15, y: Math.floor(Math.random() * 200) + 30 },
    { x: 16, y: Math.floor(Math.random() * 200) + 30 },
    { x: 17, y: Math.floor(Math.random() * 200) + 30 },
    { x: 18, y: Math.floor(Math.random() * 200) + 30 },
    { x: 19, y: Math.floor(Math.random() * 200) + 30 },
    { x: 20, y: Math.floor(Math.random() * 200) + 30 },
    { x: 21, y: Math.floor(Math.random() * 200) + 30 },
    { x: 22, y: Math.floor(Math.random() * 200) + 30 },
    { x: 23, y: Math.floor(Math.random() * 200) + 30 },
];

const chartColor = (y) => {
    if (y < 51) return Colors.GOOD;
    else if (y > 50 && y < 101) return Colors.MODERATE;
    else if (y > 100 && y < 151) return Colors.UNHEALTHY_1;
    else if (y > 150 && y < 201) return Colors.UNHEALTHY_2;
    else if (y > 200 && y < 301) return Colors.UNHEALTHY_3;
    return Colors.HAZARDOUS;
}

const Chart = () => {
    const [dayClick, setDayClick] = useState(false);
    const [AQIClick, setAQIClick] = useState(true);
    const [PMClick, setPMClick] = useState(false);
    const [COClick, setCOClick] = useState(false);
    const [CO2Click, setCO2Click] = useState(false);
    const [pollutant, setPollutant] = useState('AQI');
    const [unit, setUnit] = useState('US');
    const handleClick = (pollutant)=>{
        switch(pollutant){
            case 'AQI':
                setAQIClick(true);
                setCO2Click(false);
                setCOClick(false);
                setPMClick(false);
                setPollutant('AQI');
                setUnit('US');
                break;
            case 'PM':
                setAQIClick(false);
                setCO2Click(false);
                setCOClick(false);
                setPMClick(true);
                setPollutant('PM2.5');
                setUnit('μm/m3');
                break;
            case 'CO':
                setAQIClick(false);
                setCO2Click(false);
                setCOClick(true);
                setPMClick(false);
                setPollutant('CO');
                setUnit('μm/m3');
                break;
            case 'CO2':
                setAQIClick(false);
                setCO2Click(true);
                setCOClick(false);
                setPMClick(false);
                setPollutant('CO2');
                setUnit('μm/m3'); 
                break;
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.historyView}>
                <Text style={styles.historyText}>Lịch sử</Text>
                <View style={styles.btnHistoryView}>
                    <TouchableOpacity style={[styles.btnTime, {
                        backgroundColor: !dayClick ? Colors.PRIMARY_COLOR : 'white'
                    }]} onPress={() => {
                        if(dayClick) {
                            setDayClick(!dayClick);
                        }
                    }}>
                        <Text style={[styles.btnText,{
                            color: dayClick ? 'black' : 'white'
                        }]}>Giờ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnTime, {
                        backgroundColor: dayClick ? Colors.PRIMARY_COLOR : 'white'
                    }]} onPress={() => {
                        if(!dayClick) {
                            setDayClick(!dayClick);
                        }
                    }}>
                        <Text style={[styles.btnText,{
                            color: dayClick ? 'white' : 'black'
                        }]}>Ngày</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pollutantsView}>
                    <TouchableOpacity 
                        onPress={() => handleClick('AQI')}
                        style={[styles.pollutantsBtn,{backgroundColor: AQIClick ? Colors.PRIMARY_COLOR : 'white'}]}>
                        <Text style={[styles.btnText, {color: AQIClick? 'white' : 'black'}]}>AQI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => handleClick('PM')}
                        style={[styles.pollutantsBtn,{backgroundColor: PMClick ? Colors.PRIMARY_COLOR : 'white'}]}>
                        <Text style={[styles.btnText, {color: PMClick? 'white' : 'black'}]}>PM2.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => handleClick('CO')}
                        style={[styles.pollutantsBtn,{backgroundColor: COClick ? Colors.PRIMARY_COLOR : 'white'}]}>
                        <Text style={[styles.btnText, {color: COClick? 'white' : 'black'}]}>CO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => handleClick('CO2')}
                        style={[styles.pollutantsBtn,{backgroundColor: CO2Click ? Colors.PRIMARY_COLOR : 'white'}]}>
                        <Text style={[styles.btnText, {color: CO2Click? 'white' : 'black'}]}>CO2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsView}>
                    <Text style={styles.txtForBtn}>{formatTime(new Date().getTime())}</Text>
                    <View style={styles.detailsViewText}>
                        <Text style={{color: 'black' , fontWeight: 'bold'}}>{pollutant}
                            <Text style={{color: Colors.TEXT_NORMAL , fontWeight: '400'}}>{'  '}{unit}</Text>
                        </Text>
                        <Text style={{color: Colors.TEXT_NORMAL}}>Rất có hại cho sức khoẻ
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{'  '}266</Text>
                        </Text>
                    </View>
                </View>
            </View>
            <ChartContent />
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        marginVertical: '10@s',
    },
    historyView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    historyText: {
        fontSize: '20@ms0.3',
        color: 'black',
        marginVertical: 15
    },
    btnHistoryView: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        height: '50@s',
    },
    btnTime: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35@s',
        borderRadius: 8
    },
    btnText: {
        color: 'black',
        fontSize: '16@ms0.3'
    },
    pollutantsView: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingVertical: '10@s',
        borderTopColor: Colors.PRIMARY_COLOR,
        borderTopWidth: '0.8@s',
    },
    pollutantsBtn: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '75@s',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35@s',
    },
    detailsView: {
        width: '90%',
        backgroundColor: '#edeeee',
        borderRadius: 8
    },
    detailsViewText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '10@s',
        marginBottom: '10@s'
    },
    txtForBtn: {
        color: 'black',
        padding: '10@s',
        fontSize: '18@ms0.3'
    }
})

export default Chart;