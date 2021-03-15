import React from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import img from '../../assets/img';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={img.imgBackSpalh}
        style={{backgroundColor: 'transparent', flex: 1}}
      />
      {/* <Text>ERP</Text> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
});
