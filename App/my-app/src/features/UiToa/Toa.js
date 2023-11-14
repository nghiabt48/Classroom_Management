import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Toa = () => {
  return (
    <View style={styles.body}>
      <View>
        <Image style={styles.imgleft} source={require('./Image/left.png')}></Image>
        <Text style={styles.txt1}>Kiểm Tra tính sẵn sàng</Text>
        <Image style={styles.notifi} source={require('./Image/notifi.png')}></Image>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.press}>
            <Text style={styles.F}>Tòa F</Text>
            <Text style={styles.soluong}>3 Tầng</Text>
            <Text style={styles.chitiet}>Tòa dành cho sinh viên ngành thiết kế đồ họa và...</Text>
            <Image style={styles.imgright} source={require('./Image/right.png')}></Image>
        </Pressable>
      </View>
      <View style={styles.container1}>
      <Pressable style={styles.press1}>
            <Text style={styles.F}>Tòa P</Text>
            <Text style={styles.soluong}>5 Tầng</Text>
            <Text style={styles.chitiet}>Tòa dành cho sinh viên ngành thiết kế đồ họa và...</Text>
            <Image style={styles.imgright} source={require('./Image/right.png')}></Image>
        </Pressable>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity>
        <Pressable style={styles.press2}>
            <Text style={styles.F}>Tòa T</Text>
            <Text style={styles.soluong}>11 Tầng</Text>
            <Text style={styles.chitiet}>Tòa dành cho sinh viên ngành thiết kế đồ họa và...</Text>
            <Image style={styles.imgright} source={require('./Image/right.png')}></Image>
        </Pressable>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default Toa

const styles = StyleSheet.create({
    press2:{
        width: 355,
        height: 151,
        borderRadius: 10,
        backgroundColor: '#4EB849',
    },
    press1:{
        width: 355,
        height: 151,
        borderRadius: 10,
        backgroundColor: '#F27125',
    },
    container2:{
        top:20,
    },
    imgright:{
        top:-20,
        left: 302,
    },
    chitiet:{
        width: 200,
        height: 36,
        left: 16,
        fontSize: 12,
        fontWeight: '300',
        color: 'white',
        top: 30,
    },
    soluong:{
      left: 211,
      top :15,
      color: 'white',
      fontWeight: '500',
      fontSize: 14,

    },
    F:{
        fontWeight: '600',
        fontSize: 20,
        left: 16,
        top: 35,
        color: 'white',
    },
    press:{
        width: 355,
        height: 151,
        borderRadius: 10,
        backgroundColor: '#0D51A1',
    },

    container: {
        top: -15,
    },
    notifi:{
        left: 330,
        top: -45,
    },
    txt1:{
        textAlign: 'center',
        top: -24,
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
    },
    body:{
 padding: 20,
    },
})