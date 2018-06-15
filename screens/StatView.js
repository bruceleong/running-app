import React, { Component } from 'react'
import { View, StyleSheet, Text} from 'react-native'


const styles = StyleSheet.create({
  spacing: {
      marginTop: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      color: 'purple',
      fontSize: 32
  },
  backgroundImage: {
      height: 475,
      width: 475
  },
  container: {
      marginTop: 100,
      justifyContent: 'space-around',
      alignItems: 'center',
  },
  text: {
      color: 'white',
      fontSize: 32
  }
})

export default class StatView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Check out these sweet stats</Text>
      </View>
    )
  }
}
