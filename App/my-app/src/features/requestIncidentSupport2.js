import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.title1}>
        <Image source={require('./src/chevron-left.png')} style={{ marginTop: 5, marginRight: 5 }}></Image>
        <Text style={styles.title}>Yêu cầu hỗ trợ sự cố</Text>
      </View>

      <View style={styles.ntn}>
        <View >
          <Text style={styles.subtitle}>Sự cố về cơ sở vật chất</Text>
          <Text style={styles.info}>Người tiếp nhận: Nguyễn Trung Hải</Text>
          <Text style={styles.info2}>8-2-2023 09:05 am SĐT: 0797151033</Text>
        </View>
        <Image source={require('./src/logo.png')} style={{ marginTop: 26, marginLeft: 22 }}></Image>
      </View>

      <View>
        <Text style={styles.status}>Trạng thái yêu cầu</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./src/tick.png')}></Image>
          <View >
            <Text style={styles.statusDetail}>Yêu cầu xử lý</Text>
            <Text style={styles.statusDetail}>09:25 am</Text>
          </View>
        </View>

        <Image source={require('./src/c.png')} style={{ marginStart: 20, marginTop: 0 }}></Image>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./src/tick.png')}></Image>
          <View>
            <Text style={styles.statusDetail}>Yêu cầu đã được tiếp nhận</Text>
            <Text style={styles.statusDetail}>09:40 am</Text>
          </View>
        </View>

        <Image source={require('./src/c.png')} style={{ marginStart: 20, marginTop: 0 }}></Image>

        <View style={{ flexDirection: 'row' }}>
        <Image source={require('./src/tick.png')}></Image>
          <View>
            <Text style={styles.statusDetail}>Yêu cầu đã hoàn thành</Text>
            <Text style={styles.statusDetail}>__:__am</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.textButton}>
          Phản hồi
        </Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title1: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  title: {
    color: 'rgba(0, 0, 0, 0.87)',
    marginStart: 5,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },


  ntn: {
    marginTop: 22,
    backgroundColor: '#F1F4F5',
    borderBlockColor: '#F1F4F5',
    borderRadius: 8,
    flexDirection: 'row'

  },

  subtitle: {
    marginStart: 18,
    marginTop: 17,
    fontSize: 18,
    marginBottom: 10,
  },
  info: {
    marginTop: 13,
    marginStart: 18,
    fontSize: 14,
  },
  info2: {
    marginTop: 1,
    marginStart: 18,
    fontSize: 14,
    marginBottom: 10,
  },

  status: {
    marginTop: 16,
    color: '#000000',
    marginStart: 16,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusDetail: {
    marginStart: 28,
    fontSize: 14,
    color: '#000000'
  },
  response: {
    fontSize: 14,
    marginBottom: 10,
  },
  button:{
    backgroundColor:'#ffffff',
    borderColor:'black',
    borderRadius:8,
    width:343,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  textButton:{
    fontSize:12,
    fontWeight:'bold',
    color:'#2245AC'
  }


})