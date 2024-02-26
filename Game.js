// Game.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const choices = [
  { name: 'Sten', image: require('./images/rock.png') },
  { name: 'Sax', image: require('./images/scissors.png') },
  { name: 'Påse', image: require('./images/paper.png') },
];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const computerRandomChoice = getComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);

    determineResult(choice, computerRandomChoice.name);
  };

  const determineResult = (player, computer) => {
    if (player === computer) {
      setResult('Det blev lika!');
    } else if (
      (player === 'Sten' && computer === 'Sax') ||
      (player === 'Sax' && computer === 'Påse') ||
      (player === 'Påse' && computer === 'Sten')
    ) {
      setResult('Du vann!');
    } else {
      setResult('Datorn vann!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sten Sax Påse</Text>
      <View style={styles.choicesContainer}>
        <View style={styles.choice}>
          <Text>Du valde</Text>
          <Image source={userChoice?.image} style={styles.choiceImage} />
          <Text>{userChoice?.name}</Text>
        </View>
        <View style={styles.choice}>
          <Text>Datorn valde</Text>
          <Image source={computerChoice?.image} style={styles.choiceImage} />
          <Text>{computerChoice?.name}</Text>
        </View>
      </View>
      <Text style={styles.resultText}>{result}</Text>
      {choices.map((choice) => (
        <TouchableOpacity
          key={choice.name}
          style={styles.choiceButton}
          onPress={() => handleChoice(choice.name)}
        >
          <Text>{choice.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  choice: {
    alignItems: 'center',
  },
  choiceImage: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choiceButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default Game;
