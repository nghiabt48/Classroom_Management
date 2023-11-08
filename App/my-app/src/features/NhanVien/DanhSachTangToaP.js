import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '@rneui/themed/dist/config'

const DanhSachTangToaP = () => {
  return (
    <View style={styles.container}>

      <View style={styles.container1}>

        <TouchableOpacity>
          <Image source={require('../../images/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>Toà P</Text>
        <TouchableOpacity>
          <Image source={require('../../images/notificationsBlack.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.tang}>
        <TouchableOpacity style={styles.T1}>
          <Image source={require('../../images/city.png')} style={{ width: 24, height: 24, paddingTop: 14 }} />
          <Text style={styles.tangtxt}>Tầng 1</Text>
          <Text style={{
            marginTop: 8,
            color: '#3838386E'
          }}>17 phòng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.T2}>
          <Image source={require('../../images/cityYellow.png')} style={{ width: 24, height: 24, paddingTop: 14 }} />
          <Text style={styles.tangtxt}>Tầng 2</Text>
          <Text style={{
            marginTop: 8,
            color: '#3838386E'
          }}>17 phòng</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.T2}>
          <Image source={require('../../images/cityYellow.png')} style={{ width: 24, height: 24, paddingTop: 14 }} />
          <Text style={styles.tangtxt}>Tầng 3</Text>
          <Text style={{
            marginTop: 8,
            color: '#3838386E'
          }}>17 phòng</Text>
        </TouchableOpacity>

       
      </View>

      <View style={styles.tang}>
        <TouchableOpacity style={styles.T1}>
          <Image source={require('../../images/city.png')} style={{ width: 24, height: 24, paddingTop: 14 }} />
          <Text style={styles.tangtxt}>Tầng 4</Text>
          <Text style={{
            marginTop: 8,
            color: '#3838386E'
          }}>17 phòng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.T2}>
          <Image source={require('../../images/cityYellow.png')} style={{ width: 24, height: 24, paddingTop: 14 }} />
          <Text style={styles.tangtxt}>Tầng 5</Text>
          <Text style={{
            marginTop: 8,
            color: '#3838386E'
          }}>17 phòng</Text>
        </TouchableOpacity>
       
      </View>

    </View>
  )
}

export default DanhSachTangToaP

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  T1: {
    padding: 14,
    width: 103,
    height: 115,
    borderRadius: 8,
    backgroundColor: '#EBD9FF8C',
    marginLeft: 17
  },
  T2: {
    padding: 14,
    width: 103,
    height: 115,
    borderRadius: 8,
    backgroundColor: '#ff8686',
    marginLeft: 17
  },
  tang: {
    marginTop:4,
    paddingLeft: 16,
    flexDirection: 'row'
  },
  tangtxt: {
    marginTop: 8,
  }
})