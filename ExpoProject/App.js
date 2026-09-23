import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from "./app/index.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <HomePage/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
});