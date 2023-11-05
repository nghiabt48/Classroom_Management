import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View >
            <View style={styles.container}>
                <Image style={styles.left} source={require('./Image/left.png')}></Image>
                <Image style={styles.avata} source={require('./Image/avata.png')}></Image>
                <Image style={styles.notifications} source={require('./Image/notifications.png')}></Image>
                <Text style={styles.name}>Nguyễn Trung Hải</Text>
                <Text style={styles.bp}>Trưởng Phòng IT</Text>
            </View>
            <View style={styles.container1}>
                <View>
                    <Text style={styles.sdt}>Số điện thoại</Text>
                    <Text style={styles.number}>0921896334</Text>
                    <Image style={styles.phone} source={require('./Image/phone.png')}></Image>
                </View>
                <View style={styles.ok}>
                    <Text style={styles.quyen}>Quyền</Text>
                    <Text style={styles.quanlymang}>Quản lý mạng</Text>
                    <Image style={styles.imgquanly} source={require('./Image/editer.png')}></Image>
                </View>
                <View style={styles.okk}>
                    <Text style={styles.danhgia}>Đánh Giá</Text>
                    <Text style={styles.toanbo}>Toàn bộ đánh giá</Text>
                    <Image style={styles.imgright} source={require('./Image/rightsmall.png')}></Image>
                </View>
                <View style={styles.ote}>
                    <Pressable style={styles.press}>
                        <Image style={styles.imgstar} source={require('./Image/star4.png')}></Image>
                       <Text style={styles.phong1}>T1101</Text> 
                       <Text style={styles.phong2}>Người đánh giá: Trần Bá Hộ</Text> 
                       <Text style={styles.phong3}>Sự cố chưa đúng theo yêu cầu được</Text> 
                    </Pressable>
                </View>
                <View style={styles.otee}>
                    <Pressable style={styles.press}>
                        <Image style={styles.imgstar} source={require('./Image/star4.png')}></Image>
                       <Text style={styles.phong1}>T1101</Text> 
                       <Text style={styles.phong2}>Người đánh giá: Trần Bá Hộ</Text> 
                       <Text style={styles.phong3}>Sự cố chưa đúng theo yêu cầu được</Text> 
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    otee:{
        top: 7,
    },
    
    phong3:{
        fontWeight: '400',
        fontSize: 13,
        color: 'black',
        left: 18,
        top: -7,
    },
    phong2:{
        fontWeight: '600',
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
        top: -18,
    },
    phong1:{
 left: 18,
 fontWeight: '600',
 fontSize: 14,
 color: 'black',
    },
    imgstar:{
        top: 22,
        left: 300,
    },
    press:{
        width: 350,
        height: 105,
        left: 20,
        borderRadius: 10,
        backgroundColor: '#F1F4F5',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    },
    ote:{
        top: 4,
    },
    imgright:{
        left: 340,
        top: -36,
    },
    toanbo:{
        top: -18,
        left: 220,
        
    },
    danhgia:{
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
    },
    okk: {
        top: 30,
        left: 20,
    },
    imgquanly:{
        top: -40,
        left: 300,
    },
    quanlymang:{
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
    },
    quyen:{
        fontWeight: '400',
        fontSize: 15,
        color: 'black',
    },
    ok:{
        top: 30,
        left: 20,
    },
    phone: {
        left: 320,
    },
    number: {
        top: 40,
        left: 20,
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
    },
    sdt: {
        top: 40,
        left: 20,
        fontWeight: '400',
        fontSize: 15,
        color: 'black',
    },
    container1: {
        width: 380,
        height: 400,
        borderRadius: 10,
    },
    bp: {
        textAlign: 'center',
        top: 20,
        fontWeight: '400',
        fontSize: 14,
        color: '#FEFEFE',
    },
    name: {
        textAlign: 'center',
        top: 20,
        fontWeight: '600',
        fontSize: 18,
        color: '#FEFEFE',
    },
    notifications: {
        left: 340,
        top: -83,
    },
    avata: {
        left: 160,
        top: 30,
    },
    left: {
        top: 20,
        left: 20,
    },
    container: {
        width: 400,
        height: 240,
        backgroundColor: '#2D5381',

    },
})