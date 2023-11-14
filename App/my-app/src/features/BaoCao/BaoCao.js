import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React from 'react'

const BaoCao = () => {
    return (
        <View style={styles.body}>
            <View>
                <TouchableOpacity>
                    <Image style={styles.imgleft} source={require('./Image/left.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.txt1}>Báo Cáo Sự Cố</Text>
            </View>
            <View>
                <TextInput style={styles.txtIP} placeholder='Phòng'></TextInput>
                <TextInput style={styles.txtIP1} placeholder='Sự cố đang gặp phải'></TextInput>
                <TextInput style={styles.txtIP2} placeholder='Mô tả'></TextInput>
            </View>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Pressable style={styles.press}>
                        <Image style={styles.ell} source={require('./Image/camera.png')}></Image>
                    </Pressable>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Pressable style={styles.press1}>
                        <Image style={styles.ell} source={require('./Image/image.png')}></Image>
                    </Pressable>
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Pressable style={styles.press2}>
                        <Text style={styles.text}>Gửi yêu cầu</Text>
                    </Pressable>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default BaoCao

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
        top: 12,
    },
    press2: {
        width: 345,
        height: 40,
        left: 5,
        borderRadius: 8,
        backgroundColor: '#3257C6',
    },
    container1: {
        top: 80,
    },
    press1: {
        width: 166,
        height: 36,
        left: 180,
        borderRadius: 8,
        backgroundColor: '#CACACA',
        top: -36,
    },
    ell: {
        top: 8,
        left: 70,
    },
    container: {
        top: 75,
    },
    press: {
        width: 166,
        height: 36,
        left: 5,
        borderRadius: 8,
        backgroundColor: '#CACACA',
    },
    txtIP2: {
        width: 343,
        height: 150,
        left: 5,
        borderRadius: 6,
        backgroundColor: '#F1F4F5',
        top: 48,
    },
    txtIP1: {
        width: 343,
        height: 40,
        left: 5,
        borderRadius: 6,
        backgroundColor: '#F1F4F5',
        top: 24,
    },
    txtIP: {
        width: 343,
        height: 40,
        left: 5,
        borderRadius: 6,
        backgroundColor: '#F1F4F5',
    },
    imgleft: {
        top: 5,
    },
    txt1: {
        textAlign: 'center',
        top: -24,
        fontWeight: '700',
        fontSize: 24,
        color: 'black',
    },
    body: {
        padding: 20,
    },
})