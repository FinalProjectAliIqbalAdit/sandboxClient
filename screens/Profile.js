import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import axios from '../config/axios'

export default class MyMap extends React.Component {
    state = {
        latitude: -6.1754,
        longitude: 106.8272,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
        error : null,
    }

    componentDidMount() {

        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                })
            }, 
            (error) => {
                this.setState({
                    error: error.message
                })
            },
            {enableHighAccuracy : false, timeout: 20000, maximumAge: 10000, distanceFilter: 10 }
        )
    }

    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                axios.get('/users')
                .then((result) => {
                    alert(JSON.stringify(result.data,null,2))
                }).catch((err) => {
                    alert(JSON.stringify(err.response,null,2))
                    
                });
            },
            (error) => {
                this.setState({
                    error: error.message
                })
                alert(JSON.stringify(error.message,null,2))
            },
            {enableHighAccuracy : false, timeout: 20000, maximumAge: 10000}
        )
    }
    
    render() {
        this.getCurrentLocation()
        return (
            <MapView style={styles.map} initialRegion={this.state}>
                <MapView.Marker coordinate={this.state} />
            </MapView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: '#59656C',
        marginBottom: 10,
    },
    map: {
        // width: 300,
        // height: 300,
        flex: 1,
    }
};