import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native'
import React from 'react'

const Support = () => {
  return (
    <View style={styles.body}>
     <View>
        <TouchableOpacity>
            <Image style={styles.chevoleft} source={require('../images/back.png')}></Image>
            <Text style={styles.text}>Yêu Cầu Hỗ Trợ Sự Cố</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.container}>
        <Text style={styles.text1}>Trạng Thái Yêu Cầu</Text>
     </View>
     <View style={styles.container1}>
        <Pressable>
        <Image source={require('../images/tick.png')}></Image>
        <Text style={styles.name}>Yêu cầu</Text>
        <Text style={styles.time}>9:25 am</Text>
        </Pressable>
       
     </View>
     <View style={styles.container2}>
     <Image style={styles.rec} source={require('../images/t.png')}></Image>
        <Pressable>
        
        <Image source={require('../images/loading.png')}></Image>
        <Text style={styles.name}>Yêu cầu đã được tiêp nhận</Text>
        <Text style={styles.time}>..:.. am </Text>
        </Pressable>
       
     </View>
     <View style={styles.container3}>
     <Image style={styles.rec} source={require('../images/t.png')}></Image>
        <Pressable>
        
        <Image source={require('../images/loading.png')}></Image>
        <Text style={styles.name}>Yêu cầu đã hoàn thành</Text>
        <Text style={styles.time}>..:.. am</Text>
        </Pressable>
       
     </View>
     <View style={styles.container4}>
        <TouchableOpacity>
        <Pressable style={styles.press} >
            <Text style={styles.txt}>Phản Hồi</Text>
        </Pressable>
        </TouchableOpacity>
        
     </View>
     
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
    txt:{
        color: '#2245AC',
        textAlign: 'center',
        top: 10,
        fontWeight: '700',
        fontSize: 13,
            },
    press:{
        backgroundColor: '#F5F5F5',
        width: 350,
        height: 40,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: '#2245AC',
        borderWidth: 1,
       
    },
    container4:{
        top: 134,
    },
    container3:{
        top: 47,
    },
    container2:{
        top: 84,
    },
    rec: {
left: 20,
    },
    time: {
        left: 76,
        fontSize: 12,
        top: -40,
        color: 'black',
    },
    name:{
        left: 76,
        fontWeight: '600',
        fontSize: 15,
        top: -40,
        color: 'black',
    },
    container1:{
        top: 120,
    },
    text1:{
        fontSize: 17,
        fontWeight: '700',
        color: 'black',
    },
    container: {
        top: 90,
    },
    chevoleft: {
        top: 20,
    },
    text:{
        color: 'black',
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 25,
        top: -10,
    },
    body:{
        padding: 20,
    },
})