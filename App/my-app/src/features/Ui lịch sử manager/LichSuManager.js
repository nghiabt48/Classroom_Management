import { Image, Pressable, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const LichSuManager = () => {
    return (
        <View style={styles.body}>
            <View>
                <Image style={styles.imgleft} source={require('./Image/left1.png')}></Image>
                <Text style={styles.txt1}>Lịch Sử Hoạt Động</Text>
                <Image style={styles.notifi} source={require('./Image/notifi1.png')}></Image>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.press}>
        <Text style={styles.text}>Cấp quyền nhân sự hành chính</Text>
        <Text style={styles.text1}>Thời gian: 14/2/2023           14:20</Text>
                </Pressable>
            </View>
            <View style={styles.container1}>
                <Pressable style={styles.press}>
        <Text style={styles.text}>Cấp quyền nhân sự hành chính</Text>
        <Text style={styles.text1}>Thời gian: 14/2/2023           14:20</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LichSuManager

const styles = StyleSheet.create({
    container1:{
        top: 10,
    },
    text1:{
        top: 14,
        left: 12,
        fontWeight: '400',
        fontSize: 12,
    },
    text:{
        top: 7,
        left: 12,
        fontWeight: '500',
        fontSize: 14,
        color: 'black',
    },
    press:{
        width: 345,
        height: 63,
        borderRadius: 8,
        backgroundColor: '#F1F4F5',
        
    },
    imgleft:{
        top: 22, 
        left: 20,
    },
    notifi: {


    },
    txt1: {
        textAlign: 'center',
        top: -24,
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
    },
    body: {
        padding: 20,
    },
})