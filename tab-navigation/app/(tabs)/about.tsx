import { Text, View } from "react-native";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontWeight: 'bold',
        fontSize: 30,

      }}>ABOUT</Text>
    </View>
  );
}
