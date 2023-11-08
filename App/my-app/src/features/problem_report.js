import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
const problem_report = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  //Hiển thị bảng chọn Bao Cao Su Co
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={goBack}>
          <Image
            style={styles.navigationBack}
            source={require("../images/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Báo cáo sự cố</Text>
      </View>
      <TextInput
        style={styles.edtRoom}
        placeholder="Phòng"
        placeholderTextColor={"rgba(0, 0, 0, 0.32)"}
        returnKeyType="go"
        autoCorrect={false}
      ></TextInput>

      <TouchableOpacity style={styles.edtProblem} onPress={toggleModal}>
        <Text style={styles.text4}>Sự cố đang gặp phải </Text>
        <Image
          style={styles.btnDropdown}
          source={require("../images/dropdown.png")}
          onPress={toggleModal}
        />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.btnProblem}>
            <Text style={styles.txtProblem}>Cơ sở vật chất</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnProblem2}>
            <Text style={styles.txtProblem}>Thiết bị mạng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnProblem3}>
            <Text style={styles.txtProblem}>Vệ sinh phòng học</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnProblem4}>
            <Text style={styles.txtProblem}>Góp ý phòng học</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnProblem5}>
            <Text style={styles.txtProblem}>Sự cố khác</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnConfirm} onPress={toggleModal}>
          <Text style={styles.text3}>xác nhận</Text>
         </TouchableOpacity>
        </View>
      </Modal>
      <TextInput
        style={styles.edtDescription}
        placeholder="Mô tả sự cố"
        placeholderTextColor={"rgba(0, 0, 0, 0.32)"}
        returnKeyType="go"
        autoCorrect={false}
      ></TextInput>
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <TouchableOpacity style={styles.btnCamera}>
          <Image source={require("../images/camera.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnImage}>
          <Image source={require("../images/image.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnSend}>
        <Text style={styles.text2}>Gửi yêu cầu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default problem_report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flexDirection: "row",
    marginTop: 24,
  },
  navigationBack: {
    width: 24,
    height: 24,
    marginStart: 24,
    marginTop: 5,
  },
  text1: {
    marginStart: 70,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 24,
    fontWeight: "700",
  },
  edtRoom: {
    width: "90%",
    height: "6%",
    marginStart: 16,
    marginEnd: 16,
    marginTop: 40,
    backgroundColor: "#F1F4F5",
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 0.5,
    padding: 11,
    fontSize: 16,
    fontWeight: "400",
  },
  edtProblem: {
    width: "90%",
    height: "6%",
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24,
    backgroundColor: "#F1F4F5",
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 0.5,
    padding: 11,
    fontSize: 14,
    fontWeight: "400",
  },
  text3: {
    color: "rgba(0, 0, 0, 0.32)",
    fontSize: 14,
    fontWeight: "400",
  },
  text4: {
    color: "rgba(0, 0, 0, 0.32)",
    fontSize: 14,
    fontWeight: "400",
  },
  btnDropdown: {
    marginStart: 300,
    marginTop: -20,
  },
  edtDescription: {
    width: "90%",
    height: "20%",
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24,
    backgroundColor: "#F1F4F5",
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderWidth: 0.5,
    padding: 11,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    textAlignVertical: "top",
  },
  btnCamera: {
    paddingVertical: 8,
    paddingHorizontal: 73,
    alignItems: "flex-start",
    backgroundColor: "#E6E6E7",
    gap: 4,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#CACACA",
    borderWidth: 1,
    marginStart: 16,
  },
  btnImage: {
    paddingVertical: 8,
    paddingHorizontal: 73,
    backgroundColor: "#E6E6E7",
    gap: 4,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#CACACA",
    borderWidth: 1,
    marginStart: 10,
    marginEnd: 16,
    alignItems: "flex-start",
  },
  btnSend: {
    width: "90%",
    height: "5%",
    marginTop: 40,
    marginStart: 16,
    marginEnd: 16,
    backgroundColor: "#3257C6",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 33,
    borderRadius: 8,
    justifyContent: "center",
    gap: 10,
    flexShrink: 0,
  },
  text2: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  modalContainer: {
    paddingTop: 13,
    paddingBottom: 24,
    paddingHorizontal: 7,
    borderRadius: 12,
    borderRightWidth: 1,
    borderRightColor: "#C8C8C8",
    borderLeftWidth: 1,
    borderLeftColor: "#C8C8C8",
    backgroundColor: "#EDEDED",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
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
  btnProblem: {
    width: 329,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexShrink: 0,
    padding: 10,
  },
  btnProblem2: {
    width: 329,
    height: 40,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexShrink: 0,
    padding: 10,
  },
  btnProblem3: {
    width: 329,
    height: 40,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexShrink: 0,
    padding: 10,
  },
  btnProblem4: {
    width: 329,
    height: 40,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexShrink: 0,
    padding: 10,
  },
  btnProblem5: {
    width: 329,
    height: 40,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexShrink: 0,
    padding: 10,
  },
  txtProblem:{
    color:"rgba(0, 0, 0, 0.87)",
    fontSize:14,
    fontWeight:"400",
  }
});
