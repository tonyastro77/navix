import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, ScrollView , Image, FlatList, TouchableHighlight } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Header, CheckBox } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MenuDrawer from 'react-native-side-drawer';
import { Icon } from 'react-native-elements'

const Purchase = (props) => {
    navigationOptions = {title: 'Purchase'};


  const [drawerOpen, setDrawerOpen] = useState(false);

  const [number, setNumber] = useState(0);

  const plus = () => {
      setNumber(number + 1);
  }

  const minus = () => {
    if(number === 0){
        setNumber(0)
    }
    else {setNumber(number - 1);}
    
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
            onPress: () => setDrawerOpen(true)
          }}
          centerComponent={<Image source={require('../icons/Group58.png')} style={{width: 100, height: 35}} resizeMode={'contain'} />}
          containerStyle={{backgroundColor: '#E8C11C'}}
          rightComponent={{
            icon: 'person',
            color: 'black',
            onPress: () => alert('User settings not available at the moment'),
          }}
        />
        <View style={styles.body}>
            <View style={{flex:0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15}}>
                <TouchableWithoutFeedback style={styles.button} onPress={minus}>
                  <Text style={{fontSize: 32, fontWeight: 'bold'}}>-</Text>
                </TouchableWithoutFeedback>
                <View style={styles.numbercard}>
                    <Text styles={{fontSize: 39}}>{number}</Text>
                </View>  
                <TouchableWithoutFeedback style={styles.button} onPress={plus}>
                  <Text style={{fontSize: 32, fontWeight: 'bold'}}>+</Text>
                </TouchableWithoutFeedback>
                
            </View>

            <View style={{flex: 0.5, width: '100%'}}>
              <View style={{flex: 0.2, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Select payment method</Text>
              </View>
              <View style={{flex: 0.6, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, backgroundColor: 'white', width: '80%', borderWidth: 1}}>
                  <View style={{flex: 0.33, backgroundColor: 'white', borderWidth: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../icons/card-icon-26.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
                      </View>  
                      <View style={{flex: 0.6, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text>Credit</Text>
                        <Text style={{color: 'grey'}}>**** ***5</Text>
                      </View>  
                      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>></Text>
                      </View> 
                    </View>  
                  </View>
                  <View style={{flex: 0.33, backgroundColor: 'white', borderLeftWidth: 1, borderRightWidth: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../icons/paypal.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
                      </View>  
                      <View style={{flex: 0.6, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text>Paypal</Text>
                        <Text style={{color: 'grey'}}>john@gmail.com</Text>
                      </View>  
                      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>></Text>
                      </View> 
                    </View> 
                  </View>
                  <View style={{flex: 0.34, backgroundColor: '#E8C11C', borderWidth: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../icons/visa.png')} style={{width: 23, height:23}} resizeMode={'contain'} />
                      </View>  
                      <View style={{flex: 0.6, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text>Visa</Text>
                        <Text style={{color: 'grey'}}>**** ***5</Text>
                      </View>  
                      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>></Text>
                      </View> 
                    </View> 
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center', paddingBottom: 40}}>
              <View style={{flex: 1, backgroundColor: 'white', width: '80%', height: '50%', borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
                <View>
                 <Icon name='add-circle-outline' size={25}/>
                </View>
                <View style={{paddingLeft: 10}}>
                  <Text style={{fontSize: 16}}>Add new payment method</Text>
                </View>
                
              </View>
            </View>
            
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent:'center', width: '100%', alignItems: 'center'}}>
            <TouchableHighlight style={styles.buttonAction}><Text>Pay</Text></TouchableHighlight>
            </View>
        </View>
        </MenuDrawer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
      flex: 1,
      backgroundColor: '#CBCBC8',
      width: '100%'
  },
  button: {
      width: 55,
      height: 48,
      backgroundColor: 'white',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  numbercard: {
    borderWidth: 1, 
    width: 108,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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

export default Purchase;