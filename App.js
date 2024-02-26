import React from 'react';
import Game from './Game'; // Importera din Game-komponent
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Game />
    </View>
  );
};

export default App;
