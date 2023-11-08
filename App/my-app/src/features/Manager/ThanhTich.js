import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Switch } from '@rneui/themed';
const ThanhTich = () => {
  const [value, setValue] = React.useState(false);
  return (
    <View style={styles.container1}>

      <TouchableOpacity style={styles.container2}>
        <Image source={require('../../images/backwhite.png')} style={{ width: 20, height: 20 }}>
        </Image>
        <Text style={{ color: '#FFFFFF', paddingLeft: 10 }}>Trở về</Text>
      </TouchableOpacity>

      <View style={(styles.container3)}>
        <Image source={require('../../images/avatar.png')} style={{ width: 81, height: 81 }}></Image>
        <Text style={(styles.name)}>Nguyễn Trung Hải</Text>
        <Text style={(styles.vitri)}>Trưởng phòng IT</Text>
      </View>

      <View style={styles.container4}>

        <View style={styles.container4a}>
          <View>
            <Text>
              Số điện thoại
            </Text>
            <Text style={{ color: '#000000', fontWeight: '600', fontStyle: 'normal' }}>0797151033</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../images/phone.png')} style={{ width: 47, height: 47 }}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.container4a}>
          <View>
            <Text>Quyền</Text>
            <Text style={{ color: '#000000', fontWeight: '600', fontStyle: 'normal' }}>Quản lý mạng</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../images/quanly.png')} style={{ width: 47, height: 47 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.container5}>
          <Text style={{ fontSize: 16, color: '#000000', fontWeight: 500, fontStyle: 'normal' }}>
            Đánh giá
          </Text>
          <TouchableOpacity style={styles.container5a}>
            <Text style={{ fontSize: 10 }}>
              Toàn bộ đánh giá
            </Text>
            <Image source={require('../../images/rightchevon.png')} style={{ width: 20, height: 20, marginTop: 2 }} />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.container6}>
          <View style={styles.container6a}>
            <Text  style={{color:'#000000', fontWeight:'600', fontStyle:'normal'}}>T11.01</Text>
            <Text style={{color:'#000000', fontWeight:'600', fontStyle:'normal'}}>Người đánh giá: Trần Bá Hộ</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../images/star.png')} style={{ width: 16, height: 16, marginRight:4, }} />
              <Text>4.0</Text>
            </View>
            
          </View>
          <Text style={{textAlign:'center', marginTop:1}}>Sự cố chưa hoàn thành theo đúng yêu cầu được </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container6}>
          <View style={styles.container6a}>
            <Text  style={{color:'#000000', fontWeight:'600', fontStyle:'normal'}}>T11.01</Text>
            <Text style={{color:'#000000', fontWeight:'600', fontStyle:'normal'}}>Người đánh giá: Trần Bá Hộ</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../images/star.png')} style={{ width: 16, height: 16, marginRight:4, }} />
              <Text>4.0</Text>
            </View>
            
          </View>
          <Text style={{textAlign:'center', marginTop:1}}>Sự cố chưa hoàn thành theo đúng yêu cầu được </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default ThanhTich

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
    marginTop: 30,
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#FFFFFF"
  },
  container4a: {
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: 'space-between',
    marginTop: 30,
    flexDirection: "row",
  },
  container5: {
    paddingTop: 26,
    justifyContent: "space-between",
    paddingLeft: 15,
    flexDirection: "row",
  },
  container5a: {
    alignItems: 'center',
    marginRight: 16,
    flexDirection: 'row',
  },
  container6: {
    marginTop:6,
    height:101,
    backgroundColor: '#F1F4F5',
    borderRadius: 8,
  },
  container6a: {
    padding:16,
    marginTop:4,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  },
})

