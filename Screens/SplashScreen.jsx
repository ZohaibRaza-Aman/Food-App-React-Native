import {Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export class SplashScreen extends Component {
    componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('BoardScreen');
    }, 3000);
  } 
  render() {
    return (
        <LinearGradient colors={['#c31432', '#1D4350', '#240b36']} style={styles.container}>
        <Image resizeMode='contain' style={styles.img} source={require('../Config/FoodImages/Splashlogo.png')}/>
        </LinearGradient>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  img:{
    width:250,
    height:250,
    justifyContent:'center',
    alignContent:'center',
  },
});
