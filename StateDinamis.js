import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import React, {Component, useState} from 'react';

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>State dinamis</Text>

      <Text>Function Component (Hooks) </Text>
      <Counter />

      <Text></Text>

      <Text>Class Component</Text>
      <CounterClass />
    </View>
  );
};

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
      <Text> </Text>
      <Button title="Kurang" onPress={() => setNumber(number - 1)} />
      <Text> </Text>
      <Button title="Reset" onPress={() => setNumber(0)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button title="Tambah" onPress={() => this.setState({number: this.state.number + 1})} />
        <Text> </Text>
        <Button title="Kurang" onPress={() => this.setState({number: this.state.number - 1})} />
        <Text> </Text>
        <Button title="Reset" onPress={() => this.setState({number: 0})} />
      </View>
    );
  }
}
export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },

  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
