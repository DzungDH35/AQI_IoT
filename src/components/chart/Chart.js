import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, 
    ScrollView, ActivityIndicator, Platform, TextInput, Keyboard, ToastAndroid 
} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, Bar } from "victory-native";
import { Colors } from '@shared/colors';
import { ScaledSheet } from 'react-native-size-matters';
import PrimaryButton from "@components/common/PrimaryButton";
import moment from "moment";
import ChartContent from './VictoryChart';
import { data, dataDay } from '@shared/data';
import { apiGetData } from '@api/apiGetData';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dateFormat, formatDate } from '@shared/dateFormat';
import GlobalContext from "@context/Context";


let aqiCalculator = require('aqi-us');

const deviceId1 = "3cec62d2-c37b-4ac1-b698-d8d255ef016c";
// const dateTime = "2022-1-1";
const BASE_URL = 'http://3208-27-67-73-112.ngrok.io';
const QUANG_URL = 'http://14.190.177.159';

const chartColor = (y) => {
    if (y < 51) return Colors.GOOD;
    else if (y > 50 && y < 101) return Colors.MODERATE;
    else if (y > 100 && y < 151) return Colors.UNHEALTHY_1;
    else if (y > 150 && y < 201) return Colors.UNHEALTHY_2;
    else if (y > 200 && y < 301) return Colors.UNHEALTHY_3;
    return Colors.HAZARDOUS;
}

interface ChartProps {
    deviceId?: string;
}

const Chart = (props: ChartProps) => {
    const {api} = useContext(GlobalContext);
    // console.log(api);
    const { deviceId } = props;
    const [dayClick, setDayClick] = useState(false);
    const [dataChart, setDataChart] = useState([]);
    const [loading, setLoading] = useState(1);
    const [agvAQI, setAgvAQI] = useState(null);
    const [dob, setDob] = useState(new Date());
    const [showdatePicker, setShowDatePicker] = useState(false);
    // const [api, setApi]= useState('');
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(Platform.OS === 'ios');
        setDob(currentDate);
    };

    const handleOkBtn = (e) => {
        Keyboard.dismiss();
        if(api == '' || api == null) {
            ToastAndroid.show("Hãy điền API", ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Cập nhật API thành công!", ToastAndroid.SHORT);
        }
    }

    const formatTime = (time) => {
        if (dayClick) {
            return moment(time).format('MM-YYYY');
        }
        return moment(time).format('DD-MM-YYYY');
    }
    const handleClick = (pollutant) => {
        switch (pollutant) {
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

    useEffect(() => {
        fetchData('day');
    }, []);

    useEffect(() => {
        // console.log(now);
        if(!dayClick){
            fetchData('day');
        }else{
            fetchData('month');
        }
    },[dob]);

    const processData = (data) => {
        let dataChartProceed = [];
        let cnt = 0;
        let agvA = 0;
        data.forEach(element => {
            if (element.polutants.pm2_5) {
                const pm25 = Math.round(element.polutants.pm2_5);
                dataChartProceed.push(aqiCalculator.pm25(pm25));
                cnt+=1;
            } else {
                dataChartProceed.push(0);
            }
        });
        let agv = 0;
        dataChartProceed.forEach(e => {
            agv += e;
        });
        if(cnt > 0){
            agvA = agv / cnt;
        }
        console.log(agvA);
        if(agvA == 0){
            setLoading(3);
            setAgvAQI(null);
            setDataChart(dataChartProceed);
            console.log('NAN');
            console.log(dataChartProceed);
        }else{
            setAgvAQI(agvA.toFixed(2));
            setDataChart(dataChartProceed);
            console.log(dataChart);

        }
    }

    const fetchData = async (p) => {
        if (p == 'day') {
            try {
                setLoading(1);
                const results = await apiGetData.getByDay(api, deviceId, formatDate(dob));
                if (results.data.data) {
                    processData(results.data.data);
                    setLoading(2);
                }
            } catch (error) {
                console.log('error' + error);
                setLoading(3);
            }
        } else {
            try {
                setLoading(1);
                const results = await apiGetData.getByMonth(api, deviceId, formatDate(dob));
                if (results.data.data) {
                    processData(results.data.data);
                    setLoading(2);
                }
            } catch (error) {
                console.log('error' + error);
                setLoading(3);
            }
        }
    }

    const handleDayClick = () => {
        if (dayClick) {
            setDayClick(!dayClick);
            setAgvAQI(null);
            fetchData('day');
        }
    }

    const handleMonthClick = () => {
        if (!dayClick) {
            setDayClick(!dayClick);
            setAgvAQI(null);
            fetchData('month');
        }
    }

    const renderChart = () =>{
        if(loading == 1) {
            return <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} style={{ paddingTop: 40, paddingBottom: 250 }} />
        }else if(loading == 2) {
            return <ChartContent data={dataChart} />
        }else{
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop: 50, marginBottom: 250}}>
                    <Text style={{color: 'black', fontWeight: 'bold', fontSize:18}}>Không có dữ liệu!</Text>
                </View>
            )  
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.historyView}>
                <Text style={styles.historyText}>Lịch sử</Text>
                {/* <View style={styles.content}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Đường link API" 
                        placeholderTextColor={Colors.TEXT_NORMAL}
                        onChangeText={setApi}
                    />
                    <TouchableOpacity style={styles.okBtn} onPress={handleOkBtn}>
                        <Text style={styles.okBtnText}>OK</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.btnHistoryView}>
                    <TouchableOpacity style={[styles.btnTime, {
                        backgroundColor: !dayClick ? Colors.PRIMARY_COLOR : 'white'
                    }]} onPress={handleDayClick}>
                        <Text style={[styles.btnText, {
                            color: dayClick ? 'black' : 'white'
                        }]}>Ngày</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnTime, {
                        backgroundColor: dayClick ? Colors.PRIMARY_COLOR : 'white'
                    }]} onPress={handleMonthClick}>
                        <Text style={[styles.btnText, {
                            color: dayClick ? 'white' : 'black'
                        }]}>Tháng</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.detailsView}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={styles.timeView}>
                            <Text style={styles.txtForBtn}>{formatTime(dob)}</Text>
                            <TouchableOpacity
                                style={styles.pickTimeBtn}
                                activeOpacity={0.6}
                                onPress={() => {
                                    setShowDatePicker(true);
                            }}>
                                <Ionicons
                                    name="calendar-outline"
                                    size={32}
                                    color={Colors.PRIMARY_COLOR}
                                />
                                {showdatePicker ? (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={dob}
                                        mode={'date'}
                                        is24Hour
                                        display="default"
                                        onChange={onChangeDate}
                                        maximumDate={new Date()}
                                    />
                                ) : null}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.detailsViewText}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>AQI
                            <Text style={{ color: Colors.TEXT_NORMAL, fontWeight: '400' }}>  US</Text>
                        </Text>
                        <Text style={{ color: Colors.TEXT_NORMAL }}>Trung bình
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>{'  '}{agvAQI ? agvAQI : '-.-'}</Text>
                        </Text>
                    </View>
                </View>
            </View>
            {renderChart()}
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
    },
    pickTimeBtn: {
        height: '40@s',
        width: '40@s',
        // backgroundColor: Colors.PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    textInput: {
        borderBottomColor: Colors.PRIMARY_COLOR,
        // backgroundColor: Colors.PRIMARY_COLOR,
        borderBottomWidth: 1,
        width: '70%',
        color: 'black',
    },
    content: { 
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: '50@s',
        // backgroundColor: 'red',
        marginBottom: '20@s',
    },
    okBtn:{
        width: '50@s',
        backgroundColor: Colors.PRIMARY_COLOR,
        height: '40@s',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10@s',
        borderRadius: '10@s',
    },
    okBtnText:{
        color: '#fff',
        fontSize: '14@s',
    }
})

export default Chart;