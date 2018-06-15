import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TabNav from './navigation/TabNavigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
})

const App = () => (
  <View style={styles.container}>
    <TabNav />
  </View>
)

export default App
