import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const NhanSu = () => {
  // Danh sách dữ liệu mẫu cho Phong ky thuat
  const data = [
    {
      id: "1",
      name: "Nguyễn Trung Hải",
      role: "Trưởng phòng IT",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3eb0/a88f/dbf6007881acaa953c5eb72598d40e36?Expires=1698624000&Signature=MaeboQ6U5nvv0RSQrl5yx2Gehl1wm8ju2aFOOdw0BvF~J-8Xpf2c81jUnL180Tq9VcD6bHKGR89cg4WtW7RdZFTYYMTj2mwKEU6fzorZ5yafmPKVgFRk-pkehIzU7ljmgwks6xrFmUqK6ce1mpo~Rk7hnV9sKgRVFjy4a9OlPLXADh0T4yyjj8KQ9jN2XTzRjrQEQUJ2qGau0QXGadN0ENpw6RDfXmkpUhdkHkVxuRY1CXuolYy6abaAKNuCSfZsnsw2kbQhofOa831bbRdVwZOjsW7ky-14iF43dWCUwwh4fVADd5bL3V8vv6lvlqgztcX2KfcOdPc8M2psA5FGSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: "2",
      name: "Nguyễn Trung Hải",
      role: "Trưởng phòng IT",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3eb0/a88f/dbf6007881acaa953c5eb72598d40e36?Expires=1698624000&Signature=MaeboQ6U5nvv0RSQrl5yx2Gehl1wm8ju2aFOOdw0BvF~J-8Xpf2c81jUnL180Tq9VcD6bHKGR89cg4WtW7RdZFTYYMTj2mwKEU6fzorZ5yafmPKVgFRk-pkehIzU7ljmgwks6xrFmUqK6ce1mpo~Rk7hnV9sKgRVFjy4a9OlPLXADh0T4yyjj8KQ9jN2XTzRjrQEQUJ2qGau0QXGadN0ENpw6RDfXmkpUhdkHkVxuRY1CXuolYy6abaAKNuCSfZsnsw2kbQhofOa831bbRdVwZOjsW7ky-14iF43dWCUwwh4fVADd5bL3V8vv6lvlqgztcX2KfcOdPc8M2psA5FGSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: "3",
      name: "Nguyễn Trung Hải",
      role: "Trưởng phòng IT",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3eb0/a88f/dbf6007881acaa953c5eb72598d40e36?Expires=1698624000&Signature=MaeboQ6U5nvv0RSQrl5yx2Gehl1wm8ju2aFOOdw0BvF~J-8Xpf2c81jUnL180Tq9VcD6bHKGR89cg4WtW7RdZFTYYMTj2mwKEU6fzorZ5yafmPKVgFRk-pkehIzU7ljmgwks6xrFmUqK6ce1mpo~Rk7hnV9sKgRVFjy4a9OlPLXADh0T4yyjj8KQ9jN2XTzRjrQEQUJ2qGau0QXGadN0ENpw6RDfXmkpUhdkHkVxuRY1CXuolYy6abaAKNuCSfZsnsw2kbQhofOa831bbRdVwZOjsW7ky-14iF43dWCUwwh4fVADd5bL3V8vv6lvlqgztcX2KfcOdPc8M2psA5FGSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];
  // Danh sách dữ liệu mẫu cho Phong Hanh Chinh
  const data2 = [
    {
      id: "1",
      name: "Nguyễn Trung Hải",
      role: "Trưởng phòng IT",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3eb0/a88f/dbf6007881acaa953c5eb72598d40e36?Expires=1698624000&Signature=MaeboQ6U5nvv0RSQrl5yx2Gehl1wm8ju2aFOOdw0BvF~J-8Xpf2c81jUnL180Tq9VcD6bHKGR89cg4WtW7RdZFTYYMTj2mwKEU6fzorZ5yafmPKVgFRk-pkehIzU7ljmgwks6xrFmUqK6ce1mpo~Rk7hnV9sKgRVFjy4a9OlPLXADh0T4yyjj8KQ9jN2XTzRjrQEQUJ2qGau0QXGadN0ENpw6RDfXmkpUhdkHkVxuRY1CXuolYy6abaAKNuCSfZsnsw2kbQhofOa831bbRdVwZOjsW7ky-14iF43dWCUwwh4fVADd5bL3V8vv6lvlqgztcX2KfcOdPc8M2psA5FGSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: "2",
      name: "Nguyễn Trung Hải",
      role: "Trưởng phòng IT",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3eb0/a88f/dbf6007881acaa953c5eb72598d40e36?Expires=1698624000&Signature=MaeboQ6U5nvv0RSQrl5yx2Gehl1wm8ju2aFOOdw0BvF~J-8Xpf2c81jUnL180Tq9VcD6bHKGR89cg4WtW7RdZFTYYMTj2mwKEU6fzorZ5yafmPKVgFRk-pkehIzU7ljmgwks6xrFmUqK6ce1mpo~Rk7hnV9sKgRVFjy4a9OlPLXADh0T4yyjj8KQ9jN2XTzRjrQEQUJ2qGau0QXGadN0ENpw6RDfXmkpUhdkHkVxuRY1CXuolYy6abaAKNuCSfZsnsw2kbQhofOa831bbRdVwZOjsW7ky-14iF43dWCUwwh4fVADd5bL3V8vv6lvlqgztcX2KfcOdPc8M2psA5FGSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: "3",
      name: "Nguyễn Trung Hải",
      role: "Trưởng phòng IT",
      avatar:
        "https://s3-alpha-sig.figma.com/img/3eb0/a88f/dbf6007881acaa953c5eb72598d40e36?Expires=1698624000&Signature=MaeboQ6U5nvv0RSQrl5yx2Gehl1wm8ju2aFOOdw0BvF~J-8Xpf2c81jUnL180Tq9VcD6bHKGR89cg4WtW7RdZFTYYMTj2mwKEU6fzorZ5yafmPKVgFRk-pkehIzU7ljmgwks6xrFmUqK6ce1mpo~Rk7hnV9sKgRVFjy4a9OlPLXADh0T4yyjj8KQ9jN2XTzRjrQEQUJ2qGau0QXGadN0ENpw6RDfXmkpUhdkHkVxuRY1CXuolYy6abaAKNuCSfZsnsw2kbQhofOa831bbRdVwZOjsW7ky-14iF43dWCUwwh4fVADd5bL3V8vv6lvlqgztcX2KfcOdPc8M2psA5FGSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];
  // Hàm render cho Phong Ky Thuat
  const renderItem = ({ item }) => (
    <View style={styles.container1}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <Text style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        {"\n"}
        <Text style={styles.role}>{item.role}</Text>
      </Text>
      <TouchableOpacity>
        <Image
          style={styles.btnNavigate}
          source={require("../../images/right.png")}
        />
      </TouchableOpacity>
    </View>
  );

  // Hàm render cho Phong Hanh Chinh
  const renderItem2 = ({ item }) => (
    <View style={styles.container1}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <Text style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        {"\n"}
        <Text style={styles.role}>{item.role}</Text>
      </Text>
      <TouchableOpacity>
        <Image
          style={styles.btnNavigate}
          source={require("../../images/right.png")}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.txt1}>Phòng kỹ thuật</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.txt2}>Phòng hành chính</Text>
      <FlatList
        data={data2}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NhanSu;

const styles = StyleSheet.create({
  txt1: {
    color: "rgba(0, 0, 0, 0.32)",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 14,
    marginStart: 31,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 64,
    marginTop: 8,
    marginStart: 8,
    marginEnd: 8,
  },
  name: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
  role: {
    color: "rgba(0, 0, 0, 0.40)",
    fontSize: 12,
    fontWeight: "400",
  },
  btnNavigate: {
    marginStart: 68,
    marginTop: 24,
  },
  container1: {
    flexDirection: "row",
    backgroundColor: "#F1F4F5",
    marginTop: 10,
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 8,
    height: 80,
  },
  row: {
    flexDirection: "row",
    marginStart: 24,
    marginTop: 20,
  },
  txt2: {
    color: "rgba(0, 0, 0, 0.32)",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 36,
    marginStart: 31,
  },
});
