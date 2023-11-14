import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
  return (
    <View style={styles.body}>
      <View>
        <TouchableOpacity>
            <Image style={styles.image} source={require('./Image/left.png')}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.container}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container1}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container2}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container3}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container4}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container4}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container4}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      <View style={styles.container4}>
        <Pressable style={styles.pressable}>
    <Text style={styles.text}>Thông báo bổ sung bằng tốt nghiệp THPT</Text>
    <Text style={styles.text}>SPRING 2023</Text>
    <Text style={styles.text1}>Người đăng: nhuntq20</Text>
    <Text style={styles.text1}>Thời gian: 14/2/2023 14:20</Text>
        </Pressable>
      </View>
      </ScrollView>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container4:{
        top: 70,
    },
    container3:{
        top: 60,
    },
    container2:{
        top: 50,
    },
    container1:{
        top: 40,
    },
    text1: {
        top: 12,
        fontSize: 14,
        fontWeight: '400',
        left: 13,
    },
    text: {
        top: 12,
        fontWeight: '500',
        fontSize: 14,
        color: 'black',
        left: 13,
    },
    pressable:{
        width: 344,
        height: 110,
        backgroundColor: '#F1F4F5',
        borderRadius: 10,
    },
    container:{
        top: 27,
    },
    body:{
        padding: 25,
    },  
})