import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card } from '@components/card/Card';

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