import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Tang4ToaP = () => {
  return (
    <View style={styles.body}>
            <View>
                <Image style={styles.imgleft} source={require('./Image/left.png')}></Image>
                <Text style={styles.txt1}>Tầng 4</Text>
                <Image style={styles.notifi} source={require('./Image/notifi.png')}></Image>
            </View>
            <View>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R406</Text>
                </Pressable>
            </View>
            <View style={styles.ct}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R407</Text>
                </Pressable>
            </View>
            <View style={styles.ct1}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R408</Text>
                </Pressable>
            </View>
            <View style={styles.ct2}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R409</Text>
                </Pressable>
            </View>
            <View style={styles.ct3}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R410</Text>
                </Pressable>
            </View>
            <View style={styles.ok}>
            <View>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R405</Text>
                </Pressable>
            </View>
            <View style={styles.ct}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R404</Text>
                </Pressable>
            </View>
            <View style={styles.ct1}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R403</Text>
                </Pressable>
            </View>
            <View style={styles.ct2}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R402</Text>
                </Pressable>
            </View>
            <View style={styles.ct3}>
                <Pressable style={styles.press}>
                    <Text style={styles.txt}>R401</Text>
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

export default Tang4ToaP

const styles = StyleSheet.create({
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