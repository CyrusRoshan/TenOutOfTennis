import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class ServeinfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Serveinfo'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('../assets/screens/serveinfo.png')).uri;
    return (
      <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Go to Settings</Text>
        
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.1, position: 'absolute'}}
        />
        <Button
          title="aaaaaaaaaaaa"
          style={{ height: 100, width: '100%', position: 'absolute', float: 'down', bottom: 0 }}
          onPress={this._handleButtonPress}
        />
      
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Settings');
  }
  _handleButtonPress = () => {
    this.props.navigation.navigate('Settings');
  }
}
