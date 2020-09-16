import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import { Text, View } from './Themed'

interface PersonRequest {
  loading: boolean,
  error: boolean,
  data?: any
}

interface Props {
  navigation: any,
  route: any
}

export const CharacterProfile: React.FunctionComponent<Props> = ({ navigation, route }) => {
  const [ request, setRequestStatus ] = useState<PersonRequest>({
    loading: true,
    error: false
  })

  useEffect(() => {
    if (route.params.currentCharacter) {
      fetch(`https://swapi.dev/api/people/${route.params.currentCharacter}`)
        .then(res => res.json())
        .then(data => {
          setRequestStatus({
            loading: false,
            error: false,
            data: data.results.map((result: any, index: number) => ({ id: index, ...result }))
          })
        })
        .catch(e => {
          setRequestStatus({
            loading: false,
            error: true,
            data: e
          })
        })
    }
  }, [ request, setRequestStatus, route.params.currentCharacter ])


  return (
    <View>
      {request.data && !request.error
        ?
        <View style={styles.helpContainer} key={request.data.name}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Name: {request.data.name}
          </Text>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Born: {request.data.birth_year}
          </Text>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Identifies as: {request.data.gender}
          </Text>
          {request.data.films.map((film: string) => <Text>{film} - Film details coming soon!</Text>)}
        </View>
        : (route.params.currentCharacter
          ? <Text> Loading... </Text>
          : <Text> How did you get here? You haven't picked a character! </Text>)}

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.helpLink}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>

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
