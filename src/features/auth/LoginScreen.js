import React from "react";
import { View, Text, Image, TextInput, ImageBackgroundBase, ImageBackground, Dimensions, Pressable, Button, PointPropType } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import PrimaryButton from "@components/common/general/PrimaryButton";
import PrimaryTextInput from "@components/common/general/PrimaryTextInput";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from '@shared/colors/index'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonAuthentication from "@components/common/authentication/CommonAuthentication";
const { width, height } = Dimensions.get('window')
const LoginScreen = ({ navigation }) => {


    const onSignUp = () => {
        navigation.navigate({ name: 'SignUpScreen' })
    }

    const onLogin = () => {
        navigation.navigate({ name: 'TabBottomNavigator' })
    }
    return (
        <KeyboardAwareScrollView
            extraHeight={400}
            enableOnAndroid={true}
            style={styles.container}
        >

            <ImageBackground
                source={require('@assets/imgs/bannerPrimary.jpg')}
                resizeMode='cover'
                style={{
                    height: height / 3,
                    paddingBottom: 50
                }}>
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

                <View style={{ paddingHorizontal: 40, paddingTop: 20 }}>
                    <Text style={styles.textWelcome}>Đăng nhập ngay</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textDescription} >Bạn chưa có tài khoản?</Text>
                        <Pressable
                            onPress={onSignUp}
                        >
                            <Text style={styles.textSignUp}> Đăng ký</Text>
                        </Pressable>
                    </View>
                    {/* Form Input */}
                    <View>
                        <PrimaryTextInput
                            label='Email'
                            labelStyle={styles.labelStyle}
                            containerStyle={styles.containerTextInput}
                        />

                        <PrimaryTextInput
                            label='Mật khẩu'
                            labelStyle={styles.labelStyle}
                            containerStyle={styles.containerTextInput}
                            // iconName={'eye'}
                            // iconSize={20}
                            // iconColor={Colors.PRIMARY_COLOR}
                        />
                    </View>

                    {/* Forgot Password */}
                    <View style={styles.forgotPassView}>
                        <Pressable>
                            <Text style={styles.forgotPassText}>Quên mật khẩu?</Text>
                        </Pressable>
                    </View>

                    {/* LoginButton & Social  */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <PrimaryButton
                            title='Đăng nhập'
                            style={styles.buttonLogin}
                            onPress={onLogin}
                        />
                        <Text style={{ margin: scale(20), fontSize: 16, fontWeight: 'bold' }}>Hoặc</Text>
                        {/* Social Button view */}
                        <View style={styles.socialLogin}>
                            <PrimaryButton
                                icon='logo-facebook'
                                title='Facebook'
                                underlineColorAndroid={Colors.PRIMARY_COLOR}
                                style={styles.btnLoginWithFacebook}
                                titleStyle={styles.titleBtnFacebook}
                            />
                            <PrimaryButton
                                icon='logo-google'
                                title='Google'
                                underlineColorAndroid={Colors.PRIMARY_COLOR}
                                style={styles.btnLoginWithGoogle}
                                titleStyle={styles.titleBtnGoogle}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: height
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: Colors.WHITE,
        bottom: 50,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
    },
    textWelcome: {
        fontSize: 34,
        color: Colors.PRIMARY_COLOR,
        marginBottom: 5
    },
    textDescription: {
        fontSize: 16,
        marginBottom: '15@s'
    },
    textSignUp: {
        fontSize: 16,
        color: Colors.PRIMARY_COLOR,
        fontWeight: 'bold'
    },
    containerTextInput: {
        marginTop: '10@s',
        marginBottom: '10@s',
        borderColor: Colors.PRIMARY_COLOR,
        borderBottomWidth: 1.5
    },
    forgotPassView: {
        height: 50,
        alignItems: 'flex-end'
    },
    forgotPassText: {
        color: Colors.PRIMARY_COLOR,
        fontSize: 16
    },

    labelStyle: {
        fontSize: 16
    },
    socialLogin: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '100%'

    },
    buttonLogin: {
        backgroundColor: Colors.PRIMARY_COLOR,
        width: width - 80,
        borderRadius: 15,
    },
    btnLoginWithFacebook: {
        width: '130@ms',
        height: '50@ms',
        backgroundColor: Colors.LOGINFB_COLOR,
        borderRadius: 15,
        paddingLeft: 5
    },
    btnLoginWithGoogle: {
        width: '130@ms',
        height: '50@ms',
        backgroundColor: Colors.LOGINGG_COLOR,
        borderRadius: 15,
    },
    titleBtnFacebook: {
        fontSize: 14
    },
    titleBtnGoogle: {
        fontSize: 14
    }

})
export default LoginScreen