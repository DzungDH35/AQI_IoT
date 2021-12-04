import * as React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ImageBackgroundBase,
    ImageBackground,
    Dimensions,
    Pressable,
    Button,
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
// import PrimaryButton from "@components/common/general/PrimaryButton";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from '../../../shared/colors/index'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    LineChart,
    BarChart,
} from "react-native-chart-kit";
const { width, height } = Dimensions.get('window')


const CONumber = 22;
const PM25Number = 22;

const AQIScreen = ({ navigation }) => {
    const clickDetails = () => {
        navigation.navigate({ name: 'AQIScreen' })
    }
    const details = () => {
        navigation.navigate({ name: 'DetailsInforScreen' })
    }

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
            }
        ]
    }

    const chartConfig = {
        backgroundColor: "#fff",
        // backgroundGradientFrom: "white",
        // backgroundGradientTo: "#ffa726",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16,
            color: '#FFFFFF'
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "red"
        }

    }
    return (
        <ScrollView style={styles.container}>
            {/* AQI tổng quan */}
            <View style={styles.AQIView}>
                <View style={styles.locationView}>
                    <Text style={styles.locationText}>Địa chỉ đặt thiết bị</Text>
                    <Text>Hà Nội, Việt Nam</Text>
                </View>
                <View style={{ backgroundColor: Colors.YELLOW_SECOND }}>
                    <View style={styles.rectangleAQIView}>
                        <TouchableOpacity
                            style={styles.rectangleUpView}
                            activeOpacity={0.9}
                            onPress={() => { navigation.navigate('InforAQIScreen') }}>
                            <View style={styles.leftRetangle}>
                                <Ionicons
                                    name={'ios-happy-outline'}
                                    size={60} color={'black'}
                                />
                            </View>
                            <View style={styles.betweenRetangle}>
                                <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>96</Text>
                                <Text style={{ color: 'black', fontSize: 10 }}>AQI VN</Text>
                            </View>
                            <View style={styles.rightRetangle}>
                                <Text style={styles.text}>Không tốt cho nhóm nhạy cảm</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.rectangleBottomView}>
                            <View style={styles.viewBottom}>
                                <Ionicons name={'ios-cloudy'} size={25} color={'grey'} />
                                <Text style={styles.text1}>21 °C</Text>
                            </View>
                            <View style={styles.viewBottom}>
                                <Ionicons name={'ios-water'} size={27} color={'#00B2BF'} />
                                <Text style={styles.text1}>53%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5, }}>
                        <Text style={{ fontSize: 14 }}>Cập nhật mới nhất 19:00</Text>
                    </View>
                </View>
            </View>

            {/* Chất gây ô nhiễm */}
            <View style={styles.pollutantsView} >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10
                }}>
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
                                <Text style={styles.numberDetailsText}>69.9</Text>
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
                                <Text style={styles.numberDetailsText}>96.6</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >

            {/* BIỂU ĐỒ AQI VÀ CÁC CHẤT KHÁC */}
            <View style={styles.AQIChart}>
                <Text style={styles.pollutantsText}>AQI</Text>
                <LineChart
                    data={data}
                    width={width - 10} // from react-native
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={chartConfig}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />

                <BarChart
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    data={data}
                    width={width - 10}
                    height={220}
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
            </View>


        </ScrollView >
    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: Colors.GREY,
        flex: 1,
    },
    //AQI VIEW TONG QUAN
    AQIView: {
        backgroundColor: Colors.WHITE,
        marginBottom: '10@s',
    },
    locationView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20@s',
        paddingBottom: '10@s',
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
    },
    rectangleUpView: {
        marginTop: '3@s',
        marginLeft: '3@s',
        marginRight: '3@s',
        backgroundColor: 'yellow',
        borderRadius: 10,
        height: '80@s',
        flexDirection: 'row',
    },
    leftRetangle: {
        backgroundColor: Colors.ORANG_SECOND,
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
    //END AQI VIEW
    // btnDetails: {
    //     backgroundColor: Colors.COLOR_BUTTON,
    //     width: width - 80,
    //     borderRadius: 15,
    // },
    pollutantsView: {
        backgroundColor: Colors.WHITE,
        width: width,
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
        borderLeftColor: 'red',
        paddingLeft: 15
    },
    AQIChart: {
        marginTop: '10@s',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
    }
})
export default AQIScreen



