import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Gato from '../Gato';
import Cliques from '../Cliques';

function App() {                                                                                                                                                                                                                                                                       
  return (
    <View style={styles.container}>
      <Text> Gatinhos!</Text>
      <Gato nome="Pipoca" idade={3}/>
      <Gato nome="Milho" idade={2}/>
      <Gato nome="Manteiga" idade={1}/>
      <Cliques></Cliques>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Page() {
  return (
    <View>
      <Link href="/status">Status</Link>
    </View>
  );
}
