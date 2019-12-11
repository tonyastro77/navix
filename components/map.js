import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, KeyboardAvoidingView, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const map = (props) => {
    navigationOptions = {title: 'map'};

  const { navigate } = props.navigation;

  const [address, setAddress] = useState('');
  const [region, setRegion] = useState({latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.922, longitudeDelta: 0.0421 }); //I use the first coordinates being somewhere in the US.

  useEffect(() => {
    getLocation();
  }, []);

  showAddress = () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=rFZ8wDUs54BNzpvvzKUDX44VejkMbDDH&location=' + address
    fetch(url)
  	.then((response) => response.json()) 
  	.then((responseData) => {
      const lat = responseData.results[0].locations[0].latLng.lat;
      const lon = responseData.results[0].locations[0].latLng.lng;
      setRegion({latitude: lat, longitude: lon, latitudeDelta: 0.0222, longitudeDelta: 0.0121});
      Keyboard.dismiss();
	  });
  }  

 getLocation = async () => {

  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted'){
    Alert.alert('No permission to access location');
  }
  else {
    let location = await Location.getCurrentPositionAsync({});
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045
    }
    setRegion(region);
  }
  
};

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
          <MapView
            showsUserLocation={true}
            showsCompass={true}
            rotateEnabled={false}
            region={region}
            style={{flex: 1}}>
              <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}} />
          </MapView>
        </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

map.navigationOptions = ({navigate}) => ({title: 'Current location', headerStyle:{backgroundColor:'#E8C11C' }});

export default map;