import React from "react";
import { View, Text, Image, ImageBackgroundBase, ImageBackground, Dimensions, Pressable, Button, PointPropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import PrimaryButton from "@components/common/general/PrimaryButton";
import PrimaryTextInput from "@components/common/general/PrimaryTextInput";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from '@shared/colors/index'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonAuthentication from "@components/common/authentication/CommonAuthentication";
const { width, height } = Dimensions.get('window')
const SignUpScreen = () => {

    return (

        <KeyboardAwareScrollView
            enableOnAndroid={true} extraHeight={370}
            style={styles.container}
        >
            <ImageBackground
                source={require('@assets/imgs/bannerPrimary.jpg')}
                resizeMode='cover'
                style={{
                    height: height / 3,
                    paddingBottom: 50
                }}
            >
                <View style={styles.headerView}>
                    <Image
                        source={require('@assets/imgs/logoSamNgocLinh.png')}
                        style={styles.imgLogo}
                    >
                    </Image>
                    <Text style={styles.textBrand}>Sâm ngọc linh</Text>
                </View>
            </ImageBackground>

            <View
                style={styles.bottomView}
            >
                <View style={{ padding: 40 }}>
                    <Text style={styles.textWelcome}>Tạo tài khoản ngay</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textDescription} >Nhanh chóng và dễ dàng</Text>
                    </View>
                    {/* Form Input */}
                    <View>
                        <PrimaryTextInput
                            label='Họ và tên'
                            labelStyle={styles.labelStyle}
                            containerStyle={styles.containerTextInput}
                        />

                        <PrimaryTextInput
                            label='Email'
                            labelStyle={styles.labelStyle}
                            containerStyle={styles.containerTextInput}
                        />

                        <PrimaryTextInput
                            label='Mật khẩu'
                            labelStyle={styles.labelStyle}
                            containerStyle={styles.containerTextInput}
                        />
                    </View>

                    {/* LoginButton & Social  */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <PrimaryButton
                            title='Đăng ký'
                            style={styles.buttonSignUp}
                        />
                        <PrimaryButton
                            title='Đăng nhập'
                            titleStyle={{ color: Colors.PRIMARY_COLOR }}
                            style={styles.buttonLogin}
                        />
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Colors.SECONDARY_COLOR,
        // height: height / 3,
        // paddingBottom: 50

    },
    imgLogo: {
        width: '130@s',
        height: '80@s',
        marginBottom: '10@s'
    },
    textBrand: {
        color: Colors.PRIMARY_COLOR,
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textLogin: {
        color: Colors.PRIMARY_COLOR,
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    bottomView: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        bottom: 50,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        height: height - height / 3,
        paddingBottom: 50

    },
    textWelcome: {
        fontSize: 30,
        color: Colors.PRIMARY_COLOR,
        marginBottom: 5,
    },
    textDescription: {
        fontSize: 16,
        marginBottom: '15@s'
    },
    containerTextInput: {
        marginTop: '10@s',
        marginBottom: '10@s',
        borderColor: Colors.PRIMARY_COLOR,
        borderBottomWidth: 1.5
    },
    buttonSignUp: {
        width: width - 80,
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: 15,
        marginTop: 15
    },
    buttonLogin: {
        width: width - 80,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        borderColor: Colors.PRIMARY_COLOR,
        borderWidth: 1.5,
        marginTop: 15
    },
    labelStyle: {
        fontSize: 16
    }
})
export default SignUpScreen