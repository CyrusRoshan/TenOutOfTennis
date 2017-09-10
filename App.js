/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
*/
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


//const MenuScreen = require('./screens/Menu.js')
//const SettingsScreen = require('./screens/Settings.js')
//const PreswingScreen = require('./screens/Preswing.js')
//const SwingdataScreen = require('./screens/SwingData.js')
//const ServeinfoScreen = require('./screens/ServeInfo.js')
//const BackhandinfoScreen = require('./screens/BackhandInfo.js')
//const ForehandinfoScreen = require('./screens/ForehandInfo.js')

/*import MenuScreen from './screens/Menu.js';
import SettingsScreen from './screens/Settings.js';
import PreswingScreen from './screens/Preswing.js';
import SwingdataScreen from './screens/SwingData.js';
import ServeinfoScreen from './screens/ServeInfo.js';
import BackhandinfoScreen from './screens/BackhandInfo.js';
import ForehandinfoScreen from './screens/ForehandInfo.js';*/


class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('./assets/screens/menu.png')).uri;
    return (
      <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'center', flex: 1}}>
       
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute'}}
        />
        <Button
          title="Settings"
          style={{ height: 100, width: '100%', position: 'absolute', float: 'down', bottom: 0 }}
          onPress={this._settingsButtonPress}
        />
       <Button
          title="Start"
          style={{ height: 100, width: '100%', position: 'absolute', float: 'down', bottom: 0 }}
          onPress={this._startButtonPress}
        />

      </View>
    )
  }

  _startButtonPress = () => {
    this.props.navigation.navigate('Preswing');
  }

  _settingsButtonPress = () => {
    this.props.navigation.navigate('Settings');
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('./assets/screens/settings.png')).uri;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute'}}
        />
      </View>
    )
  }

}

class PreswingScreen extends React.Component {
  static navigationOptions = {
    title: 'Preswing'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('./assets/screens/preswing.png')).uri;
    return (
      <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'center', flex: 1}}>
       
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute'}}
        />
      
      </View>
    )
  }
}

class SwingdataScreen extends React.Component {
  static navigationOptions = {
    title: 'Swingdata'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('./assets/screens/swingdata.png')).uri;
    return (
      <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'center', flex: 1}}>
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute'}}
        />
        <Button
          title="More Info"
          style={{ height: 100, width: '100%', position: 'absolute', float: 'down', bottom: 0 }}
          onPress={this.moreInfoButtonPress}
        />
      
      </View>
    )
  }

  _moreInfoButtonPress = () => {
    /* need to make this pick the correct action */ 
    this.props.navigation.navigate('Backhandinfo');
  }
}

class ServeinfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Serveinfo'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('./assets/screens/serveinfo.png')).uri;
    return (
      <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Go to Settings</Text>
        
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute'}}
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



  class BackhandinfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Backhandinfo'
  };

  render() {
    const imageURI = Expo.Asset.fromModule(require('./assets/screens/backhandinfo.png')).uri;
    return (
      <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Go to Settings</Text>
        
        <Image
          source={{ uri: imageURI }}
          style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute'}}
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



export default StackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  Preswing: {
    screen: PreswingScreen,
  },
  Swingdata: {
    screen: SwingdataScreen,
  },
  Serveinfo: {
    screen : ServeinfoScreen,
  },
  Backhandinfo: {
    screen : BackhandinfoScreen,
  },
  /*Forehandinfo: {
    ForehandinfoScreen,
  },*/
});
