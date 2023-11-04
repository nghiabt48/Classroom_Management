import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, {useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import "expo-dev-client";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosIntance from "../../AxiosIntance";
const Logins = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const goToHomeScreen = () => {
    navigation.navigate("HomeMN");
  };
  GoogleSignin.configure({
    webClientId:'247308758118-accuefi3om4mnb5lbmo1rvuabbhaeq2r.apps.googleusercontent.com',
  });

  function onAuthStateChanged(user) {
    setUser(user);  
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  const signOutGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error); 
    }
  };

  const onGoogleButtonPress = async() => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await signOutGoogle();
  
    // Sign-in the user with the credential
    const userSignIn = auth().signInWithCredential(googleCredential);
    userSignIn.then((user) =>{
      navigation.navigate("HomeGV");
      AsyncStorage.setItem('token', idToken)
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  if (initializing) return null;
 

  //Hiển thị bảng chọn cơ sở
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={styles.imgLogo}
          source={require("../images/fptlogo.png")}
        />

        <TouchableOpacity style={styles.btnChoose} onPress={toggleModal}>
          <Text style={styles.text1}>Lựa chọn cơ sở</Text>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.txtCS}>FPT Polytechnic HO</Text>
            <View style={styles.line}></View>
            <Text style={styles.txtCS2}>FPT Polytechnic Hà Nội</Text>
            <View style={styles.line}></View>
            <Text style={styles.txtCS3}>FPT Polytechnic Hồ Chí Minh</Text>
            <View style={styles.line}></View>
            <Text style={styles.txtCS4}>FPT Polytechnic Đà Nẵng</Text>
            <View style={styles.line}></View>
            <Text style={styles.txtCS5}>FPT Polytechnic Cần Thơ</Text>
            <View style={styles.line}></View>
            <Text style={styles.txtCS6}>FPT Polytechnic Tây Nguyên</Text>
            <View style={styles.line}></View>
            <Text style={styles.txtCS7}>FPT Polytechnic Hải Phòng</Text>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.btnConfirm} onPress={toggleModal}>
              <Text style={styles.text3}>xác nhận</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity style={styles.btnGoogle} onPress={onGoogleButtonPress}>
          <Image source={require("../images/google.png")} />
          <Text style={styles.text2}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logins;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#2D5381",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  container2: {
    width: 301,
    height: 507,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 140,
  },
  imgLogo: {
    marginTop: 56,
    marginStart: 50,
    marginEnd: 50,
  },
  btnChoose: {
    width: 201,
    paddingHorizontal: 49,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 98,
    gap: 10,
    backgroundColor: "#EDEDED",
    borderStyle: "solid",
    borderColor: "#C8C8C8",
    borderWidth: 1,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text1: {
    color: "rgba(0, 0, 0, 0.32)",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
  },
  btnGoogle: {
    flexDirection: "row",
    backgroundColor: "#3257C6",
    paddingVertical: 8,
    paddingHorizontal: 58,
    marginTop: 58,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.05)",
    borderWidth: 1,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.20)",
  },
  text2: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
  },
  modalContainer: {
    width: "80%",
    height: "48%",
    borderRadius: 12,
    borderRightWidth: 1,
    borderRightColor: "#C8C8C8",
    borderLeftWidth: 1,
    borderLeftColor: "#C8C8C8",
    backgroundColor: "#EDEDED",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    flexShrink: 0,
    alignItems: "center",
  },
  btnConfirm: {
    width: 91,
    height: 30,
    alignSelf: "center",
    marginTop: 13,
    backgroundColor: "#2245AC",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  txtCS: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 20,
  },
  line: {
    width: 169,
    height: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  },
  txtCS2: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 16,
  },
  txtCS3: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 16,
  },
  txtCS4: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 16,
  },
  txtCS5: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 16,
  },
  txtCS6: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 16,
  },
  txtCS7: {
    color: "#000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    lineHeight: 24,
    marginTop: 16,
  },
});
