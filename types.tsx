export type RootStackParamList = {
  Home: undefined;
  Character: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Character: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type CharacterParamList = {
  CharacterScreen: undefined;
};

export interface Navigable<P = any> {
  navigation: { navigate: Function },
  route: { params?: P }
}
