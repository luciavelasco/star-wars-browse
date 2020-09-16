import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Character: {
            screens: {
              CharacterScreen: 'character',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
