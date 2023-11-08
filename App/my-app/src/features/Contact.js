import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { ScreenStack } from 'react-native-screens';
import { ScrollView } from 'react-native-web';

const Contact = () => {
  // const navigation = useNavigation();
  // const detailsContact =() => {
  //   navigation.navigate("DetailsContact");
  // }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity>
          <Image source={require('../images/back.png')} style={{ width: 24, height: 24, marginTop: 24, marginLeft: 24 }} />
        </TouchableOpacity>
        <Text style={styles.lienhetxt}>Liên hệ</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.titleP}>
          Phòng kỹ thuật
        </Text>
        <ScrollView>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container3}>
            <Image source={require('../images/avatar.png')} style={{ width: 64, height: 64, marginTop: 8, marginLeft: 8 }}></Image>
            <View>
              <Text style={styles.txtName}>Nguyễn Trung Hải </Text>
              <Text style={styles.txtNamepos}>Trưởng phòng IT </Text>
            </View>
            <Image source={require('../images/right.png')} style={{ width: 32, height: 32, marginLeft: 68, marginTop: 24 }}></Image>
          </View>
        </TouchableOpacity>
        </ScrollView>
       
      </View>
    </View>
  );

}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {

    flexDirection: 'row',
  },
  lienhetxt: {
    color: '#000000DE',
    marginStart: 97,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 18,

  },
  container2: {
    flex: 1,
    padding: 16,
  },
  titleP: {
    color: '#00000052',
    marginLeft: 15,
    marginTop: 14,

  },
  txtName: {
    fontSize: 14,
    color: '#000',
    marginLeft: 23,
    alignItems: 'center',
    marginTop: 20,
  },
  txtNamepos: {
    marginLeft: 23,
    color: "#00000052",

  },
  container3: {
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#F1F4F5',
    width: 343,
    height: 80
  }
})