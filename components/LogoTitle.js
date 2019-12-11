import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';


const LogoTitle = (props) => {
  
  return (
    <View style={{flex:1}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{backgroundColor: '#E8C11C'}}
        />
        
    </View>
  );
};


export default LogoTitle;