import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AqiQuality } from '@models/AirQuality';
import { FaceStatus } from '@components/card/FaceStatus';
import { Colors } from '@shared/colors';

import { mockAirQuality } from '@shared/mock-data';
import { AirQuality } from '../../models/AirQuality';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderRadius: 7,
		flexDirection: 'row',
		overflow: 'hidden',
		shadowColor: "#000",
		width: '100%'
	},
	containerShadow: {
		elevation: 2,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22
	},
	leftInfoWrapper: {
		alignItems: 'center',
		backgroundColor: Colors.GOOD,
		width: "35%",
		justifyContent: 'center',
		paddingHorizontal: 8,
		paddingVertical: 10
	},
	textStatus: {
		fontSize: 18,
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
		paddingHorizontal: 20,
		paddingVertical: 8
	},
	location1: {
		fontWeight: 'bold',
		fontSize: 18
	},
	location2: {
		fontSize: 14
	}
	
});

export class Card extends React.Component {

	// will replace with new Aqi(this.props.aqi)
	aqiObject = new AirQuality(mockAirQuality['Hazardous']);
	#aqiLevel = this.aqiObject.getLevelOfAqi();
	#status = this.aqiObject.getStatus();
	#aqi = this.aqiObject.getAqi();

	render() {
		return (
			<View style={[styles.container, styles.containerShadow, this.props.style]}>
				<View style={styles.leftInfoWrapper}>
					<Text style={styles.textStatus}>{this.#status}</Text>
					<FaceStatus status={this.#aqiLevel} style={styles.faceStatus}/>
					<View>
						<Text style={styles.aqiNumber}>{this.#aqi}</Text>
						<Text style={styles.aqiUnit}>US AQI</Text>
					</View>
				</View>
				<View>
					<View style={styles.rightInfoWrapper}>
						<Text style={styles.location1}>Hà nội: Trường Chinh</Text>
						<Text style={styles.location2}>Hanoi, Vietnam</Text>
					</View>
					<View></View>
					<View></View>
				</View>
			</View>
		);
	}
}