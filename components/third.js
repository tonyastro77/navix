import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import Swiper from "react-native-web-swiper";
import { WSnackBar } from 'react-native-smart-tip';

const third = (props) =>{
    navigationOptions = {title: 'third',};
    const { navigate } = props.navigation;
    
    const show = () => {
        WSnackBar.show({data: 'hello world'})
    }
    return(
        <View style={styles.container}>
            <Swiper>
                    <View style={styles.container}>
                        <ImageBackground source={require('../images/iPhoneX-XS-NAVIX-bg.png')} resizeMode={'stretch'} style={styles.imagen}>
                            <View style={styles.layout}>
                                <View style={styles.logo}>
                                    <Image source={require('../icons/Group58.png')} style={{width: 145.42, height: 53.72}} resizeMode={'contain'}/>
                                </View>
                                <View style={styles.textContainer1}>
                                    <Text style={styles.textStyle}>Find amazing</Text>
                                    <Text style={styles.textStyle}>places because</Text>
                                    <Text style={styles.textStyle}>it's never too</Text>
                                    <Text style={styles.textStyle}>late to</Text>
                                    <Text style={styles.textStyle}>NAVIGATE</Text>
                                </View>
                                <View style={styles.button}>
                                    <TouchableWithoutFeedback onPress={() => navigate('SecondPage', {user: 'Tony'})}><Image source={require('../icons/Group152.png')} style={{width: 126, height: 25}} /></TouchableWithoutFeedback> 
                                </View>
                            </View>            
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1}}>
                        <ImageBackground source={require('../images/iPhoneX-XS-NAVIX-bg.png')} resizeMode={'stretch'} style={styles.imagen}>
                            <View style={styles.layout}>
                                <View style={styles.logo}>
                                    <Image source={require('../icons/Group58.png')} style={{width: 145.42, height: 53.72}} resizeMode={'contain'}/>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textStyle}>Tell us where</Text>
                                    <Text style={styles.textStyle}>you are</Text>
                                    <TouchableHighlight onPress={show}>
                                        <Image source={require('../icons/ELocationButton.png')} style={{width: 239, height: 46, paddingTop: 200}} resizeMode={'contain'}/>
                                    </TouchableHighlight>  
                                </View>
                                <View style={styles.button}>
                                <TouchableWithoutFeedback onPress={() => navigate('third')}><Image source={require('../icons/Group150.png')} style={{width: 126, height: 25}} /></TouchableWithoutFeedback> 
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1}}>
                        <ImageBackground source={require('../images/iPhoneX-XS-NAVIX-bg.png')} resizeMode={'stretch'} style={styles.imagen}>
                    
                            <View style={styles.layout}>
                                <View style={styles.logo}>
                                    <Image source={require('../icons/Group58.png')} style={{width: 145.42, height: 53.72}} resizeMode={'contain'}/>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textStyle}>Welcome to</Text>
                                    <Text style={styles.textStyle}>Navix!</Text>
                                </View>
                                <View style={styles.button}>
                                <TouchableWithoutFeedback onPress={() => navigate('Home', {user: 'Tony'})}><Image source={require('../icons/Group151.png')} style={{width: 126, height: 25}} /></TouchableWithoutFeedback> 
                                </View>
                            </View>
                
                        </ImageBackground>
                    </View>
                </Swiper>
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imagen : {
        flex: 1, 
        width: '100%',
        height: '100%'
    },
    layout: {
        flex: 1,
        paddingTop: 83, 
        justifyContent: 'space-between',
        alignItems: 'center' 
    },
    logo: {
        flex: 0.3,
        width: 10,
        height: 10,
        alignItems: 'center',
    },
    textContainer1: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 0.3,
         paddingVertical: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle:{
        fontSize: 30, 
        color: 'white', 
        fontWeight:'bold', 
        alignItems: 'center'
    },
    button: {
        flex:0.3,
    }
});

export default third;