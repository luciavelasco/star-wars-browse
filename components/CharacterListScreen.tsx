import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import { Text, View } from './Themed'

interface PeopleRequest {
  loading: boolean,
  error: boolean,
  data?: any
}

interface Props {
  navigation: any
}

export const CharacterListScreen: React.FunctionComponent<Props> = ({ navigation }) => {
  const [ request, setRequestStatus ] = useState<PeopleRequest>({
    loading: true,
    error: false
  })

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(data => {
        setRequestStatus({
          loading: false,
          error: false,
          data: data.results
        })
      })
      .catch(e => {
        setRequestStatus({
          loading: false,
          error: true,
          data: e
        })
      })
  }, [ request, setRequestStatus ])

  return (
    <View>
      {request.data && !request.error
        ? request.data.map((person: any) =>
          <View style={styles.helpContainer} key={person.name}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Character', { characterUrl: person.url })}
              style={styles.helpLink}>
              <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
                {person.name}
              </Text>
            </TouchableOpacity>
          </View>)
        : <Text> Loading... </Text>}

    </View>
  )
}

const styles = StyleSheet.create({
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    textAlign: 'center'
  }
})
