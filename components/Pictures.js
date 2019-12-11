import React, { useState } from 'react';
import { View } from 'react-native';
import Images from 'react-native-chat-images';

const Pictures = (props) => {
    navigationOptions = {title: 'Pictures'};
    
    const [imgs, setimgs] = useState['DSC_0037', 'DSC_0037', 'DSC_0037', '...'];
    return(
        <View style={{ flex: 1 }}>
            <Images images={imgs} />
        </View>
    );
}

export default Pictures;