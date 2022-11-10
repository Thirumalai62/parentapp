import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Onboarding from '../images/onboarding.svg';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#20315f',
          }}>
          Parent App
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Onboarding width={300} height={300} />
      </View>
      {/* creating button */}
      <TouchableOpacity
        // onPress={() => navigation.navigate('HomeScreen')}
        onPress={() => alert('Pressed')}
        style={{
          backgroundColor: '#ad40af',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
          }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
