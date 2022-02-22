import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AqiQuality } from '@models/AirQuality';
import { FaceStatus } from '@components/card/FaceStatus';
import { Colors } from '@shared/colors';
import { mockAirQuality } from '@shared/mock-data';
import { AirQuality } from '../../models/AirQuality';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from "moment";

export class Card extends React.Component {
	airQuality = null;

	getLeftInfoWrapperBackgroundColor() {
		let aqiColor;
		switch (this.airQuality.getLevelOfAqi()) {
			case 0:
				aqiColor = Colors.GOOD; break;
			case 1:
				aqiColor = Colors.MODERATE; break;
			case 2:
				aqiColor = Colors.UNHEALTHY_1; break;
			case 3:
				aqiColor = Colors.UNHEALTHY_2; break;
			case 4:
				aqiColor = Colors.UNHEALTHY_3; break;
			case 5:
				aqiColor = Colors.HAZARDOUS; break;
		}
		return {
			backgroundColor: aqiColor
		}
	}

	render() {
		// console.log('Card component renders');
		this.airQuality = new AirQuality(this.props.data);
		// console.log();
		let airQuality = this.airQuality;
		// const { navigation } = this.props;
		const data = {
			aqi: airQuality.getAqi(),
			pm25: airQuality.getPm2_5(),
			co: airQuality.getCo(),
			temperature: airQuality.getTemperature(),
			humidity: airQuality.getHumidity(),
			time: moment(airQuality.getTime()).format('HH:mm:ss - DD/MM/YYYY'),
			address: airQuality.getAddress(),
			deviceId: this.props.deviceId,
		}
		// console.log(data.deviceId);

		return (
			<TouchableOpacity 
				style={[styles.container, styles.containerShadow, this.props.outerLayout]}
				activeOpacity={0.8}
				onPress={() =>{
					this.props.navigation.navigate('AQIDetailsScreen', {data: data});
				}}>
				<View style={[styles.leftInfoWrapper, this.getLeftInfoWrapperBackgroundColor()]}>
					<Text style={styles.textStatus}>{airQuality.getStatus()}</Text>
					<FaceStatus status={airQuality.getLevelOfAqi()} style={styles.faceStatus}/>
					<View>
						<Text style={styles.aqiNumber}>{airQuality.getAqi()}</Text>
						<Text style={styles.aqiUnit}>US AQI</Text>
					</View>
				</View>
				<View style={styles.rightInfoWrapper}>
					<View style={styles.rightInfoWrapperHeader}>
						<Text style={styles.location1}>{airQuality.getAddress()}</Text>
						<Text style={styles.location2}>Hà Nội, Việt Nam</Text>
						<View style={styles.content}>
							<Text style={styles.location2}><Ionicons name={'thermometer-outline'} size={25} color={'red'} /> {airQuality.getTemperature()} °C</Text>
							<Text style={styles.location2}><Ionicons name={'ios-water'} size={27} color={'#00B2BF'} />{airQuality.getHumidity()}%</Text>
						</View>
					</View>
					<View style={styles.rightInfoWrapperFooter}>
						<Text style={styles.time}>{moment(airQuality.getTime()).format('HH:mm:ss - DD/MM/YYYY')}</Text>
						<Icon style={styles.angleRight} name="angle-right" size={15}/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.WHITE,
		borderRadius: 7,
		flexDirection: 'row',
		overflow: 'hidden',
		shadowColor: Colors.BLACK,
		width: '100%'
	},
	containerShadow: {
		elevation: 2,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22
	},
	leftInfoWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 8,
		paddingVertical: 10,
		width: "35%"
	},
	textStatus: {
		fontSize: 14,
		fontWeight: '700',
		textAlign: 'center',
		// color: 'black',
	},
	faceStatus: {
		marginTop: 12
	},
	aqiNumber: {
		fontSize: 23,
		fontWeight: '700',
		textAlign: 'center',
		// color: 'black',
	},
	aqiUnit: {
		fontSize: 10,
		textAlign: 'center'
	},
	rightInfoWrapper: {
		flexGrow: 1,
		paddingLeft: 18,
		paddingRight: 10,
		paddingVertical: 8
	},
	rightInfoWrapperHeader: {
		flexGrow: 1,
		// backgroundColor: 'red'
	},
	location1: {
		fontWeight: 'bold',
		fontSize: 18
	},
	location2: {
		fontSize: 14
	},
	rightInfoWrapperFooter: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	time: {
		fontSize: 10,
		textAlign: 'center'
	},
	angleRight: {
		position: 'absolute',
		right: 3
	},
	content:{
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginRight: 30
	}
});