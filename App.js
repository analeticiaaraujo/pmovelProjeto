import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gato from './Gato';
import Cliques from './Cliques';

function App() {
  return (
    <View style={styles.container}>
      <Text> Hello Ellen!</Text>
      <Gato nome="Pipoca" idade={3}/>
      <Gato nome="Milho" idade={2}/>
      <Gato nome="Manteiga" idade={1}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default Cliques;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
