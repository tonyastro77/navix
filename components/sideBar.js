import React, { useState } from 'react';

export default function drawerNavigation() {
    navigationOptions = {
      drawerLabel = 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image 
          source={require('./map-museum.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };

    return (
      <Button
        onPress={() => props.navigation.navigate('Notifications')}
        title="Go to Notifications"
      />
    );
  }

function MyNotificationsScreen() {
  navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./map-spa.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
    return (
      <Button
        onPress={() => props.navigation.goBack()}
        title="Go back home"
      />
    );
  
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
