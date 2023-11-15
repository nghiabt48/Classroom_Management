import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Evaluate = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Đánh Giá</Text>
      <View style={styles.star}>
        <Image style={styles.thestar} source={require('./Image/star.png')}></Image>
        <Image style={styles.thestar1} source={require('./Image/star1.png')}></Image>
        <Image style={styles.thestar2} source={require('./Image/star1.png')}></Image>
        <Image style={styles.thestar3} source={require('./Image/star1.png')}></Image>
        <Image style={styles.thestar4} source={require('./Image/star1.png')}></Image>
      </View>
      <View style={styles.textinput}>
        <TextInput style={styles.txtinput} placeholder='Ghi đánh giá'></TextInput>
      </View>
      <View>
        <TouchableOpacity>
        <Pressable style={styles.pressable}>
        <Text style={styles.text1}>Hoàn Thành</Text>
        </Pressable>
        </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default Evaluate

const styles = StyleSheet.create({
    text1:{
        textAlign: 'center',
        top: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Inter',
    },
    pressable:{
        width: 290,
        height: 40,
        top: 90,
        borderRadius: 10,
        backgroundColor: '#2245AC',
        left: 30,
        },
    txtinput:{
        width: 360,
        height: 230,
        borderRadius: 10,
        backgroundColor: '#F1F4F5',
    },
    thestar4:{
        top: -96,
        left: 160,
    },
    thestar3:{
        top: -72,
        left: 120,
    },
    thestar2:{
        top: -48,
        left: 80,
    },
    thestar1:{
        top: -24,
        left: 40,
    },
    star:{
        top: 40,
        left: 85,
    },
    text:{
        fontWeight: '700',
        fontSize: 20,
        top: 20,
        color: 'black',
        textAlign: 'center',
    },
    body:{
        padding: 20,
    },
})