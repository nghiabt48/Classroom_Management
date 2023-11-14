import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Tang10ToaT = () => {
  return (
    <View style={styles.body}>
    <View>
        <Image style={styles.imgleft} source={require('./Image/left.png')}></Image>
        <Text style={styles.txt1}>Tầng 10</Text>
        <Image style={styles.notifi} source={require('./Image/notifi.png')}></Image>
    </View>
    <View>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.18</Text>
        </Pressable>
    </View>
    <View style={styles.ct}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.20</Text>
        </Pressable>
    </View>
    <View style={styles.ct1}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.19</Text>
        </Pressable>
    </View>
    <View style={styles.ct2}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.21</Text>
        </Pressable>
    </View>
    <View style={styles.ct3}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.23</Text>
        </Pressable>
    </View>
    <View style={styles.hello}>
    <View>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.18</Text>
        </Pressable>
    </View>
    <View style={styles.ct}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.16</Text>
        </Pressable>
    </View>
    <View style={styles.ct1}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.14</Text>
        </Pressable>
    </View>
    <View style={styles.ct2}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.13</Text>
        </Pressable>
    </View>
    <View style={styles.ct3}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.15</Text>
        </Pressable>
    </View>
    <View style={styles.ct4}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.17</Text>
        </Pressable>
    </View>
    </View>
    <View style={styles.hello1}>
    <View>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.12</Text>
        </Pressable>
    </View>
    <View style={styles.ct}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.10</Text>
        </Pressable>
    </View>
    <View style={styles.ct1}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.08</Text>
        </Pressable>
    </View>
    <View style={styles.ct2}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.07</Text>
        </Pressable>
    </View>
    <View style={styles.ct3}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.09</Text>
        </Pressable>
    </View>
    <View style={styles.ct4}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.11</Text>
        </Pressable>
    </View>
    </View>
    <View style={styles.hello2}>
    <View>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.06</Text>
        </Pressable>
    </View>
    <View style={styles.ct}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.04</Text>
        </Pressable>
    </View>
    <View style={styles.ct1}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.02</Text>
        </Pressable>
    </View>
    <View style={styles.ct2}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.01</Text>
        </Pressable>
    </View>
    <View style={styles.ct3}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.03</Text>
        </Pressable>
    </View>
    <View style={styles.ct4}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>T10.05</Text>
        </Pressable>
    </View>
    </View>
    <View style={styles.hello3}>
    <View style={styles.ct5}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>P.IT</Text>
        </Pressable>
    </View>
    
    <View style={styles.ct6}>
        <Pressable style={styles.press}>
            <Text style={styles.txt}>P.GV</Text>
        </Pressable>
    </View>
    </View>
    <View style={styles.tim}>
        <Pressable style={styles.pressable}>
            <Text style={styles.hoanthanh}>Hoàn thành</Text>
        </Pressable>
    </View>
</View>
  )
}

export default Tang10ToaT

const styles = StyleSheet.create({
    tim: {
        top: -800,
    },
    ct6:{
        left: 300,
        top: -47,
    },
    hello3:{
left: -25,
top: -840,
    },
    hello2:{
        left: -25,
        top: -620,
    },
    hello1:{
        left: -25,
        top: -400,
    },
    hello:{
        left: -25,
        top: -180,
    },
    ct4:{
        left: 300,
        top: -235,
    },
    hoanthanh:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 12,
        color: 'white',
        top: 10,
    },
    pressable:{
        width: 345,
        height: 40,
        left: 5,
        borderRadius: 8,
        backgroundColor: '#2245AC',
    },
    ok: {
 top: -100,
    },
    ct3: {
        left: 240,
        top: -188,   
       },
       ct2: {
        left: 180,
        top: -141,  
       },
       ct1: {
           left: 120,
           top: -94,
       },
       ct: {
        left: 60,
        top: -47,   
       },
       txt:{
           textAlign: 'center',
           fontWeight: '400',
           fontSize: 12,
           top: 15,
           color: 'black',
   
       },
       press: {
        width: 47,
        height: 47,
        left: 25,
        borderRadius: 4,   
        backgroundColor: '#E9ECEF',
       },
    notifi: {
        left: 330,
        top: -45,
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