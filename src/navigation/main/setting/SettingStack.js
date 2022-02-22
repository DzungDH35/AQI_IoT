import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Keyboard } from 'react-native';
import Chart from '@components/chart/Chart';
import Header from '@components/header/Header';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@shared/colors';
import GlobalContext from "@context/Context";


const Stack = createStackNavigator();

const SettingScreen = () => {
    const {api, setApi} = useContext(GlobalContext);
    const handleOkBtn = (e) => {
        Keyboard.dismiss();
        if(api == '' || api == null) {
            ToastAndroid.show("Hãy điền API", ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Cập nhật API thành công!", ToastAndroid.SHORT);
        }
    }
	return (
		<View style={{ flex: 1 }}>
			<Header />
            <View style={styles.content}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Đường link API" 
                    placeholderTextColor={Colors.TEXT_NORMAL}
                    onChangeText={setApi}
                />
                <TouchableOpacity style={styles.okBtn} onPress={handleOkBtn}>
                    <Text style={styles.okBtnText}>OK</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
};

const SettingStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name={'MapScreen'} 
				component={SettingScreen} 
				options={{
                    headerShown: false
                }}
			/>
		</Stack.Navigator>
	);
};

const styles = ScaledSheet.create({
    container: {
      backgroundColor: Colors.GREY,
      flex: 1,
    },
    textInput: {
        borderBottomColor: Colors.PRIMARY_COLOR,
        // backgroundColor: Colors.PRIMARY_COLOR,
        borderBottomWidth: 1,
        width: '70%',
        color: 'black',
    },
    content: { 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '50@s'
    },
    okBtn:{
        width: '50@s',
        backgroundColor: Colors.PRIMARY_COLOR,
        height: '40@s',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10@s',
        borderRadius: '10@s',
    },
    okBtnText:{
        color: '#fff',
        fontSize: '14@s',
    }
  });

export default SettingStack;