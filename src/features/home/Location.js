import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card } from '@components/card/Card';

import MQTT from 'sp-react-native-mqtt';

console.log('test')
// uri: "mqtt://18.193.126.219:1883",
let options = {
  uri: "mqtt://broker.hivemq.com:1883 ",
  user: "",
  pass: "",
  auth: true,
  keepalive: 32000
  }
  options.clientId = "clientId"+Date.now()
  MQTT.createClient(options).then((client) => {
    client.connect();
    client.on('closed', () => {
      console.log('mqtt.event.closed');
    });
  
    client.on('error', (msg) => {
      console.log('bin mqtt.event.error', msg);
    });
  
    client.on('message', (msg) => {
      console.log('mqtt.event.message', msg);
    });
  
    client.on('connect', () => {
      console.log('connected');
      client.subscribe('topic_name', 2)
    });
  
  }).catch((err) => {
    console.log("err : " + err);
  });

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 14,
        paddingBottom: 14
    },
    listItem: {
        marginTop: 14
    }
});

const renderItem = ({ item }) => (
    <Card style={styles.listItem}/>
);

class Location extends React.Component {
    render() {
        return (
            <FlatList
                contentContainerStyle={styles.list}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={renderItem}
            />
        );
    }
}

export { Location as LocationFragment };