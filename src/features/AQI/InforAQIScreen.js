import React from 'react';
import {
    View, Text,
    ActivityIndicator,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from '@shared/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window')

const AQI = 'AQI, hoặc Chỉ số chất lượng không khí, là chỉ số theo dõi mức độ chất lượng không khí cho công chúng. Chỉ số này dao động từ 0 đến 500, chỉ số càng cao thể hiện mức độ ô nhiễm và tác động tới sức khỏe càng cao. Ví dụ, khi các giá trị AQI cao trên 300 được coi là nguy hại cho sức khỏe, trong khi các giá trị AQI từ 0-50 thể hiện chất lượng không khí tốt. AQI được tính toán theo nhiều cách khác nhau trên toàn thế giới. Trung Quốc và Mỹ có 2 hệ thống được sử dụng rộng rãi nhất. Cả 2 hệ thống này đều sử dụng cách tính dựa trên 6 chất gây ô nhiễm chính (PM2.5,PM10, cacbon monoxit , sunfua đioxit, nitơ đioxit và zone tầng mặt đất) trong một công thức phức tạp. Kết quả tính AQI từ cả 2 công thức trên chỉ chênh lệch khoảng 200 trở xuống. Vì hệ thống chỉ số của Mỹ mang lại điểm số cao hơn cho AQI dưới 200, nên người ta nghĩ rằng nó sẽ kịch liệt hơn. Vì lý do này, chỉ số của Mỹ đã trở thành tiêu chuẩn chung trên thế giới.'
const DATA = [
    {
        id: 1,
        header: '0-50 Tốt',
        discription: 'Chất lượng không khí tốt và ít hoặc không có nguy cơ về sức khỏe. Bạn nên để không khí trong nhà được lưu thông.',
        image: require('@assets/images/green.jpg')
    },
    {
        id: 2,
        header: '51-100 Trung bình',
        discription: 'Những người nhạy cảm nên tránh các hoạt động ngoài trời vì có thể mắc các triệu chứng liên quan đến hô hấp.',
        image: require('@assets/images/yellow.jpg')
    },
    {
        id: 3,
        header: '101-150 Không tốt cho nhóm nhạy cảm',
        discription: 'Công chúng nói chung và những người nhạy cảm nói riêng có nguy cơ bị kích ứng và các vấn đề hô hấp.',
        image: require('@assets/images/orange.jpg')
    },
    {
        id: 4,
        header: '151-200 Có hại cho sức khoẻ',
        discription: 'Tăng khả năng gặp tác dụng phụ và tăng mức độ trầm trọng bệnh tim và phổi của người dân - đặc biệt là những nhóm nhạy cảm.',
        image: require('@assets/images/red.jpg')
    },
    {
        id: 5,
        header: '201-300 Rất có hại cho sức khỏe',
        discription: 'Tất cả mọi người sẽ bị ảnh hưởng đáng kể. Nhóm người nhạy cảm sẽ bị giảm sức bền trong các hoạt động. Những cá nhân này nên ở trong nhà và hạn chế hoạt động mạnh.',
        image: require('@assets/images/purple.jpg')
    },
    {
        id: 6,
        header: '301-500+ Nguy hại',
        discription: 'Tất cả mọi người và nhóm người nhạy cảm có nguy cơ gặp phải các phản ứng mạnh, những ảnh hưởng xấu đến sức khỏe và có thể gây ra các bệnh khác. Mọi người nên tránh tập thể dục và ở trong nhà.',
        image: require('@assets/images/maroon.jpg')
    },
];



const InforAQIScreen = ({ navigation }) => {


    const clickDetails = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name={'ios-close-outline'}
                    color={Colors.PRIMARY_COLOR}
                    size={32}
                    style={styles.closeIcon}
                    onPress={clickDetails} />
                <Text style={styles.headerText}>AQI là gì?</Text>
            </View>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>{AQI}</Text>
                {DATA.map((item, key) => (
                    <View key={item.id} style={styles.oneView}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textViewContent}>
                            <Text key={item.id + 10} style={styles.headerContentText}>{item.header}</Text>
                            <Text key={item.header} style={styles.text}>{item.discription}</Text>
                        </View>
                    </View>
                ))}
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
        height: '50@s',
        borderBottomWidth: '0.8@s',
        borderBottomColor: Colors.PRIMARY_COLOR,
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
    },
    content: {
        paddingVertical: '10@s',
        marginHorizontal: '10@s',
        flex: 1,
    },
    text: {
        color: 'black',
        fontSize: 15
    },
    oneView: {
        flexDirection: 'row',
        marginVertical: '10@s',
    },
    image: {
        height: '60@s',
        width: '60@s',
        borderRadius: 6
    },
    textViewContent: {
        flex: 1,
        marginLeft: '10@s',
    },
    headerContentText: {
        color: 'black',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
})

export default InforAQIScreen