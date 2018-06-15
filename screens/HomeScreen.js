import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

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
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#551a8b'
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontFamily: 'Baskerville'
    }
})

const Home = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Bruce's Running App</Text>
        <Image source={require('./rabbit.gif')} style={{width: 200, height: 200, marginBottom: 100}} />
    </View>
)


export default Home

