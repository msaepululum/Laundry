import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import icon from '../../assets/icon';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <icon.IcHomeActive /> : <icon.IcHomePasif />;
    if (label === 'Order')
      return isFocused ? <icon.IcOrderActive /> : <icon.IcOrderPasif />;

    return <icon.IcHomePasif />;
  };
  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}>
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
