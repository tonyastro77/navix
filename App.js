import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstPage from './components/FirstPage';
import Home from './components/Home';
import map from './components/map';
import findMap from './components/findMap';
import Found from './components/Found';
import Purchase from './components/Purchase';
import TimeLine from './components/TimeLine';
import Pictures from './components/Pictures';
import HslAPI from './components/HslAPI';

export default function App() {

  const MyApp = createStackNavigator({
    FirstPage: {screen: FirstPage},
    Home: {screen: Home},
    findMap : {screen: findMap},
    map: {screen: map},
    Found: {screen: Found},
    TimeLine: {screen: TimeLine},
    Purchase: {screen: Purchase},
    Pictures: {screen: Pictures}
  }, {
    headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }}
  );
  
  const AppContainer = createAppContainer(MyApp);
  return (
   
 <AppContainer />
  //<Purchase />

  );
}
