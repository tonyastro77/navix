import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, TouchableHighlight } from 'react-native';

const search = (props) => {
    navigationOptions = {title: 'search'};

    return(
        <View style={{flex: 1}}>
            <TextInput placeholder='Type an address or location' />
        </View>
    );
};

search.navigationOptions = ({navigate}) => ({title: 'search', headerStyle:{backgroundColor:'#E8C11C' }});


export default search;
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=60.241177,24.876257&radius=300&key=AIzaSyB3sUNJQ_5BybTAQBHHf8R-sGy7xb-OTVE&type=store