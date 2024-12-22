import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [inputedText, setInputedText] = useState("");
  const [displayList, setDisplayList] = useState([]);

  const onButtonClick = () => {
    setDisplayList((prev) => [...prev, inputedText]);
    setInputedText("");
  };

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <TextInput
          placeholder="input text"
          style={styles.input}
          onChangeText={(text) => {
            setInputedText(text);
          }}
          value={inputedText}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={onButtonClick}>
            <Text>123</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList data={displayList} renderItem={(listItem) => {
          return (
            <View style={styles.elem}>
              <Text>{listItem.item}</Text>
            </View>
          )
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "end",
  },
  button: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    width: "80%",
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  list: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderTopWidth: 4,
    borderTopColor: "green",
    padding: 10,
    gap: 10,
  },
  elem: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 4,
  },
});
