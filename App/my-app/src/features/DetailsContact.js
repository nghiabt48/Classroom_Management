import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const DetailsContact = () => {

  return (
    <View style={styles.container1}>

      <TouchableOpacity style={styles.container2}>
        <Image source={require('../images/backwhite.png')} style={{ width: 20, height: 20 }}>
        </Image>
        <Text>Trở về</Text>
      </TouchableOpacity>

      <View style={(styles.container3)}>
        <Image source={require('../images/avatar.png')} style={{ width: 81, height: 81 }}></Image>
        <Text style={(styles.name)}>Nguyễn Trung Hải</Text>
        <Text style={(styles.vitri)}>Trưởng phòng IT</Text>
      </View>

      <View style={(styles.container4)}>
        <View style={styles.container4a}>
          <View>
            <Text style={{color:'#00000066  '}}>Số điện thoại</Text>
            <Text>0797151033</Text>
          </View>
          <TouchableOpacity>
          <Image source={require('../images/phone.png')} style={{ width: 47, height: 47 }} />
          </TouchableOpacity>
        </View>

      </View>




    </View>
  )
}

export default DetailsContact

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#2D5381",
  },
  container2: {
    marginTop: 26,
    marginLeft: 16,
    flexDirection: 'row',
  },
  container3: {
    alignItems: 'center',
    marginTop: 37
  },
  container4: {
    marginTop:50,
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFFFFF"
  },
  container4a:{
    marginLeft:40,
    width:300,
    height:60,
    justifyContent:'space-between',
    marginTop:30,
    alignContent:'center',
    flexDirection:"row",
  },
  name: {
    color: '#FEFEFE',
    fontSize: 24,
    fontWeight: '600'
  },
  vitri: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: '400'
  }

})