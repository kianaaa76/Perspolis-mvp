import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Explore extends Component{
    render(){
        return(
            <View style={Styles.containerStyle}>
                <Text>
                    Explore
                </Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    containerStyle: {
        flex:1
    }
});

export default Explore;
