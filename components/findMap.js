import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, KeyboardAvoidingView, View, Keyboard, TouchableWithoutFeedback, Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Header, Slider } from 'react-native-elements';

const findMap = (props) => {
    navigationOptions = {title: 'findMap'};
    const { params } = props.navigation.state;

  const { navigate } = props.navigation;

  const [address, setAddress] = useState('');
  const [region, setRegion] = useState({latitude: 60.200692, longitude: 24.934302, latitudeDelta: 0.0222, longitudeDelta: 0.0121});

  useEffect(() => {
    showAddress();
    
  }, []);

  showAddress = () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=rFZ8wDUs54BNzpvvzKUDX44VejkMbDDH&location=' + params.address1 + ' ,Helsinki'
    fetch(url)
  	.then((response) => response.json()) 
  	.then((responseData) => {
      const lat = responseData.results[0].locations[0].latLng.lat;
      const lon = responseData.results[0].locations[0].latLng.lng;
      setRegion({latitude: lat, longitude: lon, latitudeDelta: 0.0222, longitudeDelta: 0.0121});
	  });
  }  

  return (
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        <Header
          leftComponent={{
            icon: 'menu',
            color: 'black',
          }}
          centerComponent={<Image source={require('../icons/Group58.png')} style={{width: 100, height: 35}} resizeMode={'contain'} />}
          containerStyle={{backgroundColor: '#E8C11C'}}
          rightComponent={{
            icon: 'person',
            color: 'black',
            onPress: () => alert('User settings not available at the moment'),
          }}
        />
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      
            <MapView
            style={{ flex : 1}}
            region={region}>
          <Marker
            coordinate={{latitude: region.latitude, longitude: region.longitude}} />
          </MapView>
        </TouchableWithoutFeedback>

       <TextInput placeholder='Type location address' style={{borderBottomColor: 'blue', borderBottomWidth:1, paddingBottom: 2}} onChangeText={(address) => setAddress(address)}/>
       <Button title="SHOW" onPress={showAddress} />
       
  </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

findMap.navigationOptions = ({navigate}) => ({title: 'Find on the map', headerStyle:{backgroundColor:'#E8C11C' }});

export default findMap;