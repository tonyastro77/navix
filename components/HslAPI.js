import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const HslAPI = (props) => {
  
    const client = new ApolloClient({
        uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
      });
      // console.log(client)
      const query = gql`
      query myquery($latitude : Float!, $longitude: Float!){
       plan(
         from: {lat: 60.19775, lon: 24.94053},
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
      
      const data = client
       .query({
         query: query,
         variables: {
          latitude: 60.18840,
           longitude: 25.00744
         }
       }).then(data => console.log(data.data.plan.itineraries[0]))
    return(
        <View style={{ flex: 1 }}>
            <Text>Hello</Text>
        </View>
    );
}

export default HslAPI;