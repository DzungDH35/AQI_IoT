import * as React from 'react';
import { View, Text, Image, TextInput, ImageBackgroundBase, ImageBackground, Dimensions, Pressable, Button, PointPropType } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import PrimaryButton from "@components/common/PrimaryButton";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from '@shared/colors'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { width, height } = Dimensions.get('window')



const AQIScreen = ({ navigation }) => {
    const clickDetails = () => {
        navigation.navigate({ name: 'AQIDetailsScreen' })
    }
    return (
        <View style={styles.container}>
            <PrimaryButton
                title='Details   >'
                style={styles.btnDetails}
                onPress={clickDetails}
            />
        </View>
    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: height,
        alignItems: "center",
        justifyContent: 'center'
    },
    btnDetails: {
        backgroundColor: Colors.PRIMARY_COLOR,
        width: width - 80,
        borderRadius: 15,
    },
})
export default AQIScreen