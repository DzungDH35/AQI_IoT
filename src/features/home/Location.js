import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Card } from '@components/card/Card';
import { Colors } from '@shared/colors/index';
import MQTT from 'sp-react-native-mqtt';

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: 'center',
	},
	list: {
		paddingBottom: 14,
		paddingHorizontal: 14
	},
	listItem: {
		marginTop: 14,
	},
});

class Location extends React.Component {
	mqttClient = MQTT.createClient({
		uri: 'mqtt://broker.hivemq.com:1883',
		clientId: 'clientId' + Date.now()
	});

	constructor(props) {
		console.log('Location fragment constructs');
		super(props);
		this.state = {
			data: []
		};

		this.mqttClient
			.then(client => {
				client.on('connect', () => {
					console.log('MQTT Connection is successful');
					client.subscribe('/aqi', 2);
				});

				client.on('message', msg => {
					let dataObj = JSON.parse(msg.data);

					if (Object.keys(dataObj).length !== 0) {
						this.updateCurrentData(dataObj);
					}
				});

				client.on('closed', () => {
					console.log('MQTT Connection is closed');
					MQTT.removeClient(client);
				});

				client.on('error', msg => {
					console.log('MQTT Error: ', msg);
				});

				client.connect();
			})
			.catch(err => {
				console.log('MQTT Exception: ' + err);
			});
	}

	componentWillUnmount() {
		console.log('Location fragment unmounts');
		this.mqttClient.then(client => {
			client.disconnect();
		});
	}

	render() {
		console.log('Location fragment renders');
		return this.state.data.length === 0 ? (
			<View style={styles.loading}>
				<ActivityIndicator size="large" color={Colors.LIGHT_BLUE} />
			</View>
		) : (
			<FlatList
				contentContainerStyle={styles.list}
				data={this.state.data}
				renderItem={({ item }) => (
					<Card outerLayout={styles.listItem} {...item}/>
				)}
				keyExtractor={(item) => item.deviceId}
			/>
		);
	}

	updateCurrentData(newPiece) {
		let newData = this.state.data;
		let newPieceHasExistentId = false;

		for (let item of newData) {
			if (item['deviceId'] === newPiece['deviceId']) {
				item['deviceType'] = newPiece['deviceType'];
				item['data'] = newPiece['data'];
				newPieceHasExistentId = true;
				break;
			}
		}

		if (!newPieceHasExistentId) {
			newData.push(newPiece);
		}
		this.setState({data: newData});
	}
}

export { Location as LocationFragment };
