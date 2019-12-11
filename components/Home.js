import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableHighlight, Image, Alert, Button, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import moment from "moment";
import MenuDrawer from 'react-native-side-drawer';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Icon } from 'react-native-elements'

const Home = (props) => {
    navigationOptions = {title: 'Home'}

  const { navigate } = props.navigation;
  const [isDateTimePickerVisible, setDateTimePicker] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState('00:00');
  const [totalMinute, setTotalMinute] = useState(0);
  const [address1, setAddress1] = useState('');
  const[keyword1, setKeyword1] = useState('');
  var [value1, setValue1] = useState(1);
  var [value2, setValue2] = useState(1);
  var [value3, setValue3] = useState(1);
  var [value4, setValue4] = useState(1);
  var [value5, setValue5] = useState(1);
  var [value6, setValue6] = useState(1);
  var [value7, setValue7] = useState(1);
  var [value8, setValue8] = useState(1);
  var [pressStatus1, setPressStatus1] = useState(false);
  var [pressStatus2, setPressStatus2] = useState(false);
  var [pressStatus3, setPressStatus3] = useState(false);
  var [pressStatus4, setPressStatus4] = useState(false);
  var [pressStatus5, setPressStatus5] = useState(false);
  var [pressStatus6, setPressStatus6] = useState(false);
  var [pressStatus7, setPressStatus7] = useState(false);
  var [pressStatus8, setPressStatus8] = useState(false);

  showDateTimePicker = () => {
    setDateTimePicker(true);
  }

  hideDateTimePicker = () => {
    setDateTimePicker(false);
  }

  handleDatePicked = (date) => {
    setHour(moment(date).format('HH:mm'));
    hideDateTimePicker();
  }

  toggleOpen = () => {
    setDrawerOpen(true);
  }

  toggleClose = () => {
    setDrawerOpen(false);
  }

  function drawerContent() {
    return(
      <TouchableOpacity onPress={toggleClose} style={styles.animatedBox}>
        <View style={styles.options}><Icon name='home' size={20} /><Text style={styles.options2}>Home</Text></View>
        <View style={styles.options}><Icon name='notifications' size={20} /><Text style={styles.options2}>Notification</Text></View>
        <View style={styles.options}><Icon name='feedback' size={20} /><Text style={styles.options2}>Feedback</Text ></View>
        <View style={styles.options}><Icon name='settings' size={20} /><Text style={styles.options2}>Settings</Text></View>
        <View style={styles.options}><Icon name='star' size={20} /><Text style={styles.options2}>Rate us</Text></View>
        <View style={styles.options}><Icon name='help' size={20} /><Text style={styles.options2}>Help</Text></View>
      </TouchableOpacity>
    )
  }

  var Pressing1 = (event) => {
    event.preventDefault();
    let num = value1;
    setValue1(Number(-1)*num); 
    setKeyword1("restaurant"); 
    if(value1 <= 0){setPressStatus1(false);}  else{setPressStatus1(true);}
  }
  var Pressing2 = (event) => {
    event.preventDefault();
    let num = value2;
    setValue2(Number(-1)*num);  
    setKeyword1("lodging"); 
    if(value2 <= 0){setPressStatus2(false);}  else{setPressStatus2(true);}
  }
  var Pressing3 = (event) => {
    event.preventDefault();
    let num = value3;
    setValue3(Number(-1)*num);  
    setKeyword1("bar"); 
    if(value3 <= 0){setPressStatus3(false);}  else{setPressStatus3(true);}
    
  }
  var Pressing4 = (event) => {
    event.preventDefault();
    let num = value4;
    setValue4(Number(-1)*num);  
    setKeyword1("spa"); 
    if(value4 <= 0){setPressStatus4(false);}  else{setPressStatus4(true);}
  }
  var Pressing5 = (event) => {
    event.preventDefault();
    let num = value5;
    setValue5(Number(-1)*num);
    setKeyword1("amusement_park");   
    if(value5 <= 0){setPressStatus5(false);}  else{setPressStatus5(true);}
  }
  var Pressing6 = (event) => {
    event.preventDefault();
    let num = value6;
    setValue6(Number(-1)*num);
    setKeyword1("tourist_attraction");
    if(value6 <= 0){setPressStatus6(false);}  else{setPressStatus6(true);}
  }
  var Pressing7 = (event) => {
    event.preventDefault();
    let num = value7;
    setValue7(Number(-1)*num);  
    setKeyword1("university");
    if(value7 <= 0){setPressStatus7(false);}  else{setPressStatus7(true);}
  }
  var Pressing8 = (event) => {
    event.preventDefault();
    let num = value8;
    setValue8(Number(-1)*num);
    setKeyword1("park");
    if(value8 <= 0){setPressStatus8(false);}  else{setPressStatus8(true);}
  }

  return (
   
    <View style={styles.container}>
         <MenuDrawer 
          open={drawerOpen} 
          drawerContent={drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
        <Header
          leftComponent={{
            icon: 'menu',
            color: 'black',
            onPress: () => setDrawerOpen(true),
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
          width: '100%'}} source={require('../images/helsinki-750x450.jpg')}>
        </ImageBackground>
        
        <View style={styles.search}>

          <View style={{flex : 0.25, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../icons/Group111.png')} style={{width: 60, height: 60}} />
          </View>

          <View style={{flexDirection: 'column', flex : 0.75}}>

            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>What do you want to explore?</Text>
            </View>

            <View style={{flexDirection: 'row', height: 25, width: '100%', flex: 1}}>
              <TextInput style={{backgroundColor:'white', width: '80%', paddingHorizontal: 10}} placeholder='City, address, location' placeholderTextColor='#959090' value={address1} onChangeText={address1 => setAddress1(address1)} />
              <TouchableHighlight style={{alignItems: 'center', justifyContent: 'center', width: '20%', paddingRight: 10}} onPress={() => navigate('findMap', {address1})}  ><Image source={require('../icons/Group44.png')} style={{width: '100%'}} resizeMode={'contain'}  /></TouchableHighlight>
            </View>

            <View style={{flexDirection: 'row', height: 25, justifyContent: 'center', width: '70%', flex: 1, alignItems: 'center'}}>
              <TouchableHighlight><Text style={{fontSize: 9}}><MaterialIcons name='location-on' size={15} /> Find on the map</Text></TouchableHighlight>
              <TouchableHighlight onPress={() => navigate('map')} style={{paddingLeft: 9}} ><Text style={{fontSize: 9}}><FontAwesome name='location-arrow' size={15} /> Use current location</Text></TouchableHighlight>
            </View>

          </View> 

        </View>     
        
      <View style={{flex: 0.5, justifyContent: 'center', width: '100%', alignItems: 'center'}}>
        
          <ImageBackground source={require('../icons/Group39.png')} style={{paddingHorizontal: 20, flex: 0.5, justifyContent: 'center', alignItems: 'center'}} resizeMode={'contain'}>
            <TouchableWithoutFeedback onPress={showDateTimePicker}>
              <Text style={{fontSize: 25, color:'#E8C11C', fontWeight: 'bold'}}>{hour}</Text>
            </TouchableWithoutFeedback>
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={hideDateTimePicker}
              mode='time'
              
            />   
          </ImageBackground>
            
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', flex: 0.25}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus1 ? styles.category : styles.category2} onPress={Pressing1}>
              <Image source={require('../icons/ionic-md-restaurant.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Restaurants</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus2 ? styles.category : styles.category2} onPress={Pressing2}>
              <Image source={require('../icons/material-hotel.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Hotels</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus3 ? styles.category : styles.category2} onPress={Pressing3}>
              <Image source={require('../icons/material-local-bar.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Bars</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus4 ? styles.category : styles.category2} onPress={Pressing4}>
              <Image source={require('../icons/map-spa.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Wellness</Text>
          </View>
          
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', flex: 0.25}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus5 ? styles.category : styles.category2} onPress={Pressing5}>
              <Image source={require('../icons/map-amusement-park.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Amusements</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus6 ? styles.category : styles.category2} onPress={Pressing6}>
              <Image source={require('../icons/map-museum.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>History</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus7 ? styles.category : styles.category2} onPress={Pressing7}>
              <Image source={require('../icons/material-local-library.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Education</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight activeOpacity={1} style={pressStatus8 ? styles.category : styles.category2} onPress={Pressing8}>
              <Image source={require('../icons/material-nature-people.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
            </TouchableHighlight>
            <Text style={{fontSize: 8}}>Nature</Text>
          </View>
          
        </View>

      </View>
      <View style={{flex: 0.15, flexDirection: 'row', justifyContent:'center', width: '100%', alignItems: 'center'}}>
          <TouchableHighlight style={styles.buttonAction} onPress={() => navigate('Found', {keyword1}) }><Text>Show</Text></TouchableHighlight>
      </View>
      </MenuDrawer>
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
  search: {
    backgroundColor: '#E8C11C', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '100%',
    flex: 0.15
  },
  buttonBack : {
    borderWidth: 1,
    borderColor: 'black',
    width: '40%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
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
  category: {
    borderWidth: 1, 
    borderColor: '#707070', 
    width: 40, 
    height: 40, 
    borderRadius: 30, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#E8C11C'
  },
  category2: {
    borderWidth: 1, 
    borderColor: '#707070', 
    width: 40, 
    height: 40, 
    borderRadius: 30, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  animatedBox: {
    flex: 0.5,
    backgroundColor: "#F5F5F5",
  },
  options: {
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    flex: 0.166,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  options2: {
    paddingLeft: 10
  }
});

export default Home;