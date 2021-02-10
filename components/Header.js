import React from 'react';
import { View ,} from 'react-native';
import { Title } from 'react-native-paper';


function Header(props) {
    return (
        <View style={{backgroundColor:"#aee1e1"}}>
            <View style={{alignItems:"center"}}>
                <Title style={{color:"#ff5e78",fontSize: 23, fontWeight: "bold",marginVertical:15}}>POPCORNMOVIES</Title>
            </View>
        </View >
    );
}

export default Header;