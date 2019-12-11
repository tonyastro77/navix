import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, View, ImageBackground, ScrollView , Image, FlatList, TouchableHighlight } from 'react-native';
import { Header, CheckBox } from 'react-native-elements';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Timeline from 'react-native-timeline-listview';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import moment from "moment";

const TimeLine = (props) => {
    navigationOptions = {title: 'TimeLine'};
    const { params } = props.navigation.state;
    const { navigate } = props.navigation;

    const [route, setRoute] = useState([]);
 
    useEffect(() => {
      const query = gql`
    query myquery($latitude : Float!, $longitude: Float!){
     plan(
       from: {lat: 60.31699, lon: 24.95799},
       to: {lat: $latitude , lon: $longitude},
     ) {
       itineraries {
         walkDistance
         duration
         legs {
           mode
           startTime
           endTime
           from {
             lat
             lon
             name
             stop {
               code
               name
               gtfsId
               stoptimesForPatterns(omitNonPickups: true, timeRange: 1800) {
                 pattern {
                   code
                 }
                 stoptimes {
                   scheduledDeparture
                 }
               }
             }
           }
           to {
             lat
             lon
             name
             stop {
               patterns {
                 code
               }
             }
           }
           trip {
             gtfsId
             pattern {
               code
             }
             tripHeadsign
           }
         }
       }
     }
   }
    `
    const client = new ApolloClient({
      uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    });
      const data = client
      .query({
        query: query,
        variables: {
         latitude: params.lat,
          longitude: params.lng
        }
      }).then(data => {
         setRoute(data.data.plan.itineraries[0])
        //  console.log(data.data.plan.itineraries[0])
       })
    
    }, []);

    
    
    
    


//     const data = [
//   {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
//   {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
//   {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
//   {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
//   {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
// ];
  getTimeLineItems = ()=>{ 
    if(route && route.legs) 
      return route.legs.map(x => ({time: moment(x.startTime).format('HH:mm') , title: x.from.name, description:x.mode}))
    else return []
  }
  if(!route)return
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
          <Timeline data={getTimeLineItems()} />
        </ScrollView>
        <View style={{flex: 0.20, flexDirection: 'row', justifyContent:'center', width: '100%', alignItems: 'center'}}>
          <TouchableHighlight style={styles.buttonAction} onPress={() => navigate('Purchase') }><Text>Pay</Text></TouchableHighlight>
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
  }
});

export default TimeLine;