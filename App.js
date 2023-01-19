import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {flex: 5}]}>Step One</Text>
      <Text style={[styles.title, {flex: 3}]}>Step Two</Text>
      <Text style={[styles.title, {flex: 4}]}>Step Three</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue ',
    backgroundColor: 'gray',
    margin: 10,
    padding: 20,
  }
});
