// src/index.jsx
import { Text, Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";



export default function HomePage() {
  const [estado, setEstado] = useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Text>ola</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: "row",
    padding:40,
    backgroundColor: '#fff',
  }
});