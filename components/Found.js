import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, View, ImageBackground, ScrollView , Image, FlatList, TouchableHighlight } from 'react-native';
import { Header, CheckBox } from 'react-native-elements';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

const Found = (props) => {
    navigationOptions = {title: 'Found'};
    const { params } = props.navigation.state;
  const { navigate } = props.navigation;
  const [location, setLocation] = useState('60.169832,24.938162');
  const [place, setPlace] = useState([]);
  const [placeId, setPlaceId] = useState(0);
  const [selected, setSelected] = React.useState(new Map());

  function Item({ id, name, icon, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? '#dbdbdb' : '#ffffff' },
        ]}
      >
        <View style={{flex:0.1, paddingLeft: 15}}><Image style={{width: 23.33, height: 20}} source={require('../icons/feather-heart.png')} resizeMode={'contain'}/></View>
                    <View style={{flex: 0.1, paddingHorizontal: 5}}><Text style={{fontSize: 12, fontWeight: 'bold'}}>7 min</Text></View>
                    <View style={{flex: 0.1, paddingHorizontal: 5}}><Image style={{width: 39, height: 26}} source={{uri: icon}} resizeMode={'contain'}/></View>
                    <View style={{flex: 0.4, paddingHorizontal: 5}}><Text style={{fontSize: 12, fontWeight: 'bold'}}>{name}</Text></View>
                    <View style={{flex: 0.1, paddingHorizontal: 5}}><Text style={{fontSize: 12, fontWeight: 'bold'}}>2 €</Text></View>
                    <View style={{flex: 0.2}}><CheckBox center checkedIcon='dot-circle-o' uncheckedIcon='circle-o' /></View>   
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    getPlaces();
  }, []);

  getPlaces = () => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ location + '&radius=3500&key=key&type=' + params.keyword1
   
    fetch(url)
  	.then((response) => response.json()) 
  	.then((responseData) => {
      setPlace(responseData.results);  
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }  

  const onSelect = React.useCallback(
    id => {
      setSelected(id);
    },
    [selected],
  );

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 15,
          width: "100%",
          backgroundColor: "#E8C11C",
          marginVertical: 6
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
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
        <ImageBackground style={{flex:0.2, 
          paddingTop: 30, 
          justifyContent: 'space-between', 
          width: '100%'}} source={require('../images/alexandra-dech-UrlJUjvbcac-unsplash.png')} resizeMode={'stretch'}>
        </ImageBackground>
        <View style={{backgroundColor: '#E8C11C', flex: 0.06, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontWeight: 'bold', paddingLeft: 10}}>We've found the following trips for you</Text>
            <Image source={require('../icons/Group95.png')} style={{width: 13, height:16, paddingLeft: 100}} resizeMode={'contain'} />
            <Image source={require('../icons/Group94.png')} style={{width: 17, height:14}} resizeMode={'contain'} />
            
        </View>
        <ScrollView style={{flex:0.54, width: '100%'}}>
          <FlatList 
              style={{marginVertical: 6}}
              keyExtractor={item => item.id}
              renderItem={({item}) => 
              <Item
              id={item.id}
              name={item.name}
              icon={item.icon}
              selected={item.id == selected}
              onSelect={onSelect}
            />
              }
              ItemSeparatorComponent={listSeparator}
              data={place}
              extraData={selected}
            /> 
        </ScrollView>
        <View style={{flex: 0.20, flexDirection: 'row', justifyContent:'center', width: '100%', alignItems: 'center'}}>
          <TouchableHighlight style={styles.buttonAction} onPress={() =>{
            selected_item = place.find(x => x.id == selected )
            console.log(selected_item.geometry.location.lat)
            navigate('TimeLine', { lat: selected_item.geometry.location.lat, lng:selected_item.geometry.location.lng })}}><Text>Get routes</Text></TouchableHighlight>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAction : {
    borderWidth: 1,
    borderColor: 'black',
    width: '75%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8C11C'
  },
  item: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent: 'space-evenly'
  }
});


export default Found;