import MapView, { Marker, Polyline } from 'react-native-maps'
import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Text, Button } from 'react-native'
import pick from 'lodash/pick';
import haversine from 'haversine';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    buttonStyle: {
        color: 'pink'
    }
})

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.33170303,
                longitude: -122.03024001,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            currentLocation: 0,
            showStartButton: true,
            showStopButton: false
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => console.log('-----', position, 'current location', '--------'))
    }

    startRun() {
        this.setState({showStartButton: false, showStopButton: true})

        StatusBar.setBarStyle('light-content')

        navigator.geolocation.getCurrentPosition(position => console.log(position, 'current location'))


        navigator.geolocation.getCurrentPosition(
            (position) => { },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const { routeCoordinates, distanceTravelled } = this.state
            const newLatLngs = { latitude: position.coords.latitude, longitude: position.coords.longitude }
            const positionLatLngs = pick(position.coords, ['latitude', 'longitude'])
            this.setState({
                routeCoordinates: routeCoordinates.concat(positionLatLngs),
                distanceTravelled: distanceTravelled + this.calcDistance(newLatLngs),
                prevLatLng: newLatLngs
            })
        });
    }

    stopRun() {
        this.setState({showStartButton: true, showStopButton: false, routeCoordinates: []})
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    calcDistance(newLatLng) {
        const { prevLatLng } = this.state
        return (haversine(prevLatLng, newLatLng) || 0)
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={this.state.region}
                    showsUserLocation={true}
                    followUserLocation={true}
                    onRegionChangeComplete={(region) => this.setState({ region })}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <Polyline
                        coordinates={this.state.routeCoordinates}
                        strokeColor="purple"
                        strokeWidth={6}
                    />
                    {
                        this.state.routeCoordinates.length > 1
                            ?
                            <Marker
                                coordinate={{
                                    latitude: this.state.routeCoordinates[0].latitude,
                                    longitude: this.state.routeCoordinates[0].longitude
                                }}
                            />
                            : ''
                    }
                </MapView>
                {
                    this.state.showStartButton &&
                    <View>
                        <Button
                            title="Start your run"
                            color="#841584"
                            onPress={() => this.startRun()} />
                    </View>
                }

                {
                    this.state.showStopButton &&
                    <View>
                        <Button
                            title="Stop run"
                            color="blue"
                            onPress={() => this.stopRun()} />
                    </View>
                }

            </View>
        )
    }
}
