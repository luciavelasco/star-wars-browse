import * as React from 'react';
import { StyleSheet } from 'react-native';

import { CharacterListScreen } from '../components/CharacterListScreen';
import { Text, View } from '../components/Themed';

export default function HomeScreen({ navigation }: { navigation: { navigate: Function}}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Wars Characters</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CharacterListScreen navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
