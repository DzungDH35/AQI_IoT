import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, Bar } from "victory-native";
import { Colors } from '@shared/colors';
import { ScaledSheet } from 'react-native-size-matters';
import PrimaryButton from "@components/common/PrimaryButton";
import moment from "moment";

// const AQI = ()=>{
//     return {}
// }

const now = moment().format('H');
// console.log(now);

const data = [
    //ow, y: Math.floor(Math.random() * 200) + 30 },
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

const colors = [
    Colors.GOOD,
    Colors.MODERATE,
    Colors.UNHEALTHY_1,
    Colors.UNHEALTHY_2,
    Colors.UNHEALTHY_3,
    Colors.HAZARDOUS
];

const chartColor = (y) => {
    if (y < 51) return colors[0];
    else if (y > 50 && y < 101) return colors[1];
    else if (y > 100 && y < 151) return colors[2];
    else if (y > 150 && y < 201) return colors[3];
    else if (y > 200 && y < 301) return colors[4];
    return colors[5];
}

const Chart = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.historyView}>
                    <Text style={styles.historyText}>Lịch sử</Text>
                    <View style={styles.btnHistoryView}>
                        <TouchableOpacity style={[styles.btnTime, { backgroundColor: 'blue' }]}>
                            <Text style={styles.btnText}>Giờ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnTime}>
                            <Text style={styles.btnText}>Ngày</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pollutantsView}>
                        <TouchableOpacity style={styles.pollutantsBtn}>
                            <Text style={styles.btnText}>AQI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pollutantsBtn}>
                            <Text style={styles.btnText}>PM2.5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pollutantsBtn}>
                            <Text style={styles.btnText}>CO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pollutantsBtn}>
                            <Text style={styles.btnText}>CO2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailsView}>
                        <Text style={styles.txtForBtn}>15 Thg 12, 22:00-23:00</Text>
                        <View style={styles.detailsViewText}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>AQI </Text>
                                <Text style={{ color: 'black' }}>US</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>Rất có hại cho sức khoẻ  </Text>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>266</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* chart */}
                <View style={{ width: '100%', backgroundColor: '#fff' }}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        barRatio={10}
                        domain={{ x: [0, 23] }}

                    >
                        <VictoryBar
                            data={data}
                            barWidth={10}
                            style={{
                                data: {
                                    fill: ({ datum }) => chartColor(datum.y)
                                }
                            }}
                            alignment="start"
                            events={[
                                {
                                    target: "data",
                                    eventHandlers: {
                                        onPress: () => {
                                            Alert.alert('clicked');
                                        }
                                    }
                                }
                            ]}
                        />
                    </VictoryChart >
                    <TouchableOpacity style={{ backgroundColor: 'blue' }}
                        onPress={() => {
                            Alert.alert('clicked');
                        }}>
                        <Text style={{ color: 'white' }}>Alo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        // backgroundColor: 'yellow',
        height: '50@s',

    },
    btnTime: {
        backgroundColor: 'red',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35@s',
        borderRadius: 8
    },
    btnText: {
        color: 'white',
        fontSize: '16@ms0.3'
    },
    pollutantsView: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingVertical: '10@s',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    pollutantsBtn: {
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 10,
        width: '75@s',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35@s',
    },
    detailsView: {
        width: '90%',
        // height: 80,
        backgroundColor: '#ccc',
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