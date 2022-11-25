import React from 'react';
import {Text, View} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

function NewsCard() {
  return (
    <View
      style={{
        width: windowWidth,
        minHeight: 150,
        backgroundColor: '#ccc',
        marginBottom: 15,
        padding: 10,
      }}>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
      <Text>Check Text</Text>
    </View>
  );
}

export default NewsCard;
