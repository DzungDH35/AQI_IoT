import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, TextInput, ImageBackgroundBase, ImageBackground, Dimensions, Pressable, Button, PointPropType } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from '@shared/colors/index'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window')

const detailsInfor = [
    {
        name: 'CO',
        dinhNghia: 'Cacbon monoxit (CO), được biết tới như "sát thủ thầm lặng", là một chất khí không màu, không mùi. Cacbon monoxit (CO) có thể đạt ngưỡng nguy hiểm khi có thiết bị khí nào đó bị lắp đặt sai, sửa không đúng cách hoặc vận hành lỗi, cũng có thể xảy ra khi ống thoát khí, ống xả, ống dẫn bị nghẽn làm cản luồng khí di chuyển.',
        denTu: ['Các thiết bị đốt cháy nhiên liệu hóa thạch (gỗ, dầu, ga, hoặc than) hoạt động không đúng cách hoặc hệ thống thông gió kém. Nguồn bao gồm lửa, lò sưởi và bếp gas, quá trình đốt cháy động cơ hoặc nhà máy điện.'],
        anhHuongNganHan: ['● Thiếu oxi, nhức đầu, chóng mặt, buồn ngủ, cảm thấy mệt mỏi', '● Rối loạn tiêu hóa, nôn mửa', '● Tức ngực '],
        anhHuongDaiHan: ['● Sự hít vào ngăn chặn tế bào máu nhận và vận chuyển oxy']
    },
    {
        name: 'PM2.5',
        dinhNghia: 'Bụi PM2.5 là vật chất dạng hạt trôi nổi trong không khí với đường kính bằng 2.5 micromet hoặc nhỏ hơn. PM2.5 rất nhỏ, nó có thể bị hấp thụ vào máu khi hít phải. Do vậy, đây là chất gây ô nhiễm đe dọa lớn nhất tới sức khỏe.',
        denTu: ['Nó có thể được thải ra từ nguồn nhân tạo hoặc tự nhiên hoặc được tạo ra từ các chất ô nhiễm khác',
            '● Kết quả quá trình đốt từ các nhà máy nhiệt điện',
            '● Khói và mồ hóng từ cháy rừng và đốt chất thải',
            '● Phát thải từ các phương tiện và động cơ đốt trong',
            '● Quá trình công nghiệp có liên quan các phản ứng hóa học giữa các khí (Lưu huỳnh điôxít, Nitơ điôxít, và hợp chất hữu cơ dễ bay hơi)'
        ],
        anhHuongNganHan: ['●Kích ứng mắt, họng và mũi',
            '● Nhịp tim không bình thường',
            '● Hen suyễn',
            '● Ho, đau ngực, đau họng, khó thở '
        ],
        anhHuongDaiHan: ['● Bệnh hô hấp viêm phế quản, hen, tràn khí phổi',
            '● Tổn thương mô phổi',
            '● Ung thư',
            '● Đau tim',
            '● Đột quỵ',
            '● Tử vong sớm'
        ]
    }
]

const DetailsInforScreen = ({ route, navigation }) => {
    isLoading = false;
    const index = route.params.index;
    const clickDetails = () => {
        navigation.navigate({ name: 'AQIDetailsScreen' })
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name={'ios-close-outline'}
                    color={Colors.PRIMARY_COLOR}
                    size={50}
                    style={styles.closeIcon}
                    onPress={clickDetails} />
                <Text style={styles.headerText}>{detailsInfor[index].name}</Text>
            </View>
            <ScrollView style={styles.content}>
                <Text style={styles.textHeader}>{detailsInfor[index].name} là gì?</Text>
                <Text style={styles.textContent}>{detailsInfor[index].dinhNghia}</Text>
                <Text style={styles.textHeader}>Nó đến từ đâu?</Text>
                {detailsInfor[index].denTu.map((item, key) => (
                    <Text key={key} style={styles.textContent}> {item} </Text>)
                )}
                <Text style={styles.textHeader}>Nó ảnh hưởng như nào đến sức khoẻ của chúng ta?</Text>
                <Text style={styles.textHeader}>Ảnh hưởng ngắn hạn:</Text>
                {detailsInfor[index].anhHuongNganHan.map((item, key) => (
                    <Text key={key} style={styles.textContent}> {item} </Text>)
                )}
                <Text style={styles.textHeader}>Ảnh hưởng lâu dài:</Text>
                {detailsInfor[index].anhHuongDaiHan.map((item, key) => (
                    <Text key={key} style={styles.textContent}> {item} </Text>)
                )}
            </ScrollView>
        </View>

    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '40@s',
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.PRIMARY_COLOR
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    closeIcon: {
        position: 'absolute',
        left: 0,
    },
    content: {
        marginTop: '15@s',
        marginHorizontal: '10@s',
        flex: 1,
    },
    textHeader: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textContent: {
        lineHeight: '20@s',
        marginBottom: 10
    }

})
export default DetailsInforScreen