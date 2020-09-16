import * as React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import { CharacterProfile } from '../components/CharacterProfile'
import { Navigable } from '../types'

export default function CharacterScreen({ navigation, route }: Navigable) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse Star Wars Characters</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <CharacterProfile navigation={navigation} route={route} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
