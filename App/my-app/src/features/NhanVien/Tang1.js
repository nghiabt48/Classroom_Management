import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

const Tang1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Image source={require('../../images/back.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>Tầng 1</Text>
                <TouchableOpacity>
                    <Image source={require('../../images/notificationsBlack.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>


            <View style={styles.container2}>

            </View>

            <Button
    title="Hoàn thành"
    color="#2245AC"
    style={{padding:16, borderRadius:50}}/>
        </View>
    )
}

export default Tang1

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container2:{
        width:343,
        height:369,
        alignSelf:'center'
    },
})