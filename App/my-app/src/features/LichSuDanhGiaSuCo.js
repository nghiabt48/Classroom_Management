import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LichSuDanhGiaSuCo = () => {
    return (
        <View style={styles.container1}>

            <View style={styles.container1a}>
                <Image source={require('../images/avatar.png')} style={{ width: 48, height: 48 }} />
                <Text
                    style={{ color: '#FEFEFE', paddingLeft: 12 }}>
                    Nguyễn Trung Hải</Text>
                <Image source={require('../images/notifications.png')}
                    style={{ width: 20, height: 20, }} />
            </View>

            <View style={styles.container2}>
                <Text style={styles.titleHis}>Lịch sử</Text>

                <TouchableOpacity style={styles.boxsuco}>
                    <View style={{ padding: 17 }}>
                        <Text style={styles.titsuco}>Sự cố về cơ sở vật chất</Text>
                        <Text style={{ marginTop: 13, fontSize: 12 }}>Người tiếp nhận: Nguyễn Trung Hải</Text>
                        <View style={styles.time}>
                            <Text style={{ fontSize: 12 }}>8-2-2023</Text>
                            <Text style={{ fontSize: 12 }}>09:05 am</Text>
                            <Text style={{ fontSize: 12 }}>Phòng: T1101</Text>
                        </View>
                    </View>
                    <Image source={require('../images/avatar.png')} style={{ width: 49, height: 49, marginTop: 26, marginRight: 22 }}></Image>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default LichSuDanhGiaSuCo

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#2D5381'
    },
    container1a: {
        paddingTop: 43,
        paddingLeft: 16,
        paddingRight: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleHis: {
        fontSize: 24,
        color: '#000000DE',
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'center',
        marginTop: 18,
    },
    container2: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
    },
    boxsuco: {
        flexDirection: 'row', backgroundColor: '#F1F4F5', borderRadius: 8,
        justifyContent: "space-between",
        shadowColor: '#323232',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    time: {
        flexDirection: 'row',
        paddingBottom: 13,
        marginTop: 1,
        justifyContent: 'space-between'
    },
    titsuco: {
        color: "#000000",
        fontWeight: '600',
        fontSize: 14,
        fontStyle: "normal"
    }
})