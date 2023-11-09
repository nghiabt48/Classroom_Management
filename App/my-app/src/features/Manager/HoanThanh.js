import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HoanThanh = () => {
  return (
    <View>
      <View style={styles.box}>
        <View>
          <Text style={{ fontSize: 14, color: "#000", fontWeight: '600', marginBottom: 13 }}>Lỗi máy tính </Text>
          <Text>Người yêu cầu: Trần Hà Uyên</Text>
          <Text style={{ marginBottom: 12, marginTop: 4 }}>Người tiếp nhận: Nguyễn Trung Hải</Text>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={{ marginLeft: 25 }}>Phòng: T1101</Text>
          <Text style={{ color: "#29D13ACC", marginLeft: 49, marginBottom: 12 }}>Đúng giờ</Text>
        </View>
      </View>
    </View>
  )
}

export default HoanThanh

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    padding: 16,
    marginTop:16,
    backgroundColor: "#F1F4F5",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
})