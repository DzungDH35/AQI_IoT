import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AqiQuality } from '@models/AirQuality';
import { FaceStatus } from '@components/card/FaceStatus';
import { Colors } from '@shared/colors';
import { mockAirQuality } from '@shared/mock-data';
import { AirQuality } from '../../models/AirQuality';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';

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
		textAlign: 'center'
	},
	faceStatus: {
		marginTop: 12
	},
	aqiNumber: {
		fontSize: 23,
		fontWeight: '700',
		textAlign: 'center'
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
		flexGrow: 1
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
	}
});

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
		console.log('Card component renders');
		this.airQuality = new AirQuality(this.props.data);
		let airQuality = this.airQuality;

		return (
			<View style={[styles.container, styles.containerShadow, this.props.outerLayout]}>
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
						<Text style={styles.location1}>{airQuality.getLocation()['longitude']}</Text>
						<Text style={styles.location2}>{airQuality.getLocation()['latitude']}</Text>
					</View>
					<View style={styles.rightInfoWrapperFooter}>
						<Text style={styles.time}>{airQuality.getTime()}</Text>
						<Icon style={styles.angleRight} name="angle-right" size={15}/>
					</View>
				</View>
			</View>
		);
	}
}
