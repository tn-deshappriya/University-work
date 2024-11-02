import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.editText}>Hello, EEI3269!</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
header: {
  backgroundColor: 'pink',
  padding: 20,
},
editText: {
  fontWeight: 'bold',
}
})