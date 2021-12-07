import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, Bar } from "victory-native";
import { Colors } from '@shared/colors';
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
    Colors.GOOD_COLOR,
    Colors.MODERATE_COLOR,
    Colors.UNHEALTHY1_COLOR,
    Colors.UNHEALTHY2_COLOR,
    Colors.UNHEALTHY3_COLOR,
    Colors.HAZARDOUS_COLOR
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
        <View style={{ width: '100%', backgroundColor: 'white' }}>
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
    )
}


export default Chart;