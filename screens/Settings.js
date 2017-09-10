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

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Go Home</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }
}