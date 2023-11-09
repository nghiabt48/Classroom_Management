import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SuCo from './SuCo'
import DaTiepNhan from './DaTiepNhan'
import ChuaHoanThanh from './ChuaHoanThanh'
import HoanThanh from './HoanThanh'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();


const SuCoChuaTiepNhan = () => {
    return (

        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require("../../images/backwhite.png")} style={{ width: 10, height: 10 }} />
                </TouchableOpacity>

                <Text style={{ justifyContent: 'space-between' }}>Lỗi máy tính </Text>
                <TouchableOpacity>
                    <Image source={require("../../images/notifications.png")} style={{ width: 20, height: 20 }} />

                </TouchableOpacity>
            </View>

            <NavigationContainer style={styles.containernavi}>
                <Tab.Navigator>
                    <Tab.Screen name="Sự cố" component={SuCo} />
                    <Tab.Screen name="Đã tiếp nhận " component={DaTiepNhan} />
                    <Tab.Screen name="Chưa hoàn thành" component={ChuaHoanThanh} />
                    <Tab.Screen name="Hoàn thành" component={HoanThanh} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>


    )
}

export default SuCoChuaTiepNhan

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#2D5381"
    },
    containernavi: {
        backgroundColor: "#FFFFFF",
        flex: 2,
        borderRadius: 24
    }
})