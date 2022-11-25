import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    console.log('login_details', username, password);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ff',
        padding: 20,
      }}>
      <View style={styles.alignCenter}>
        <Text style={styles.appHeading}>Parent App</Text>
      </View>
      <View
        style={{
          marginVertical: 80,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#c6c6c6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 0,
            marginBottom: 20,
          }}>
          <MaterialIcons
            name="email"
            size={20}
            color="#c6c6c6"
            style={{
              marginRight: 5,
            }}
          />
          <TextInput
            placeholder="Enter Your Email"
            value={username}
            onChangeText={e => setUsername(e)}
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#c6c6c6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 0,
            marginBottom: 20,
            // marginTop: 10,
          }}>
          <MaterialIcons
            name="email"
            size={20}
            color="#c6c6c6"
            style={{
              marginRight: 5,
            }}
          />
          <TextInput
            placeholder="Enter Your Password"
            value={password}
            onChangeText={e => setPassword(e)}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
              textTransform: 'capitalize',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'capitalize',
  },
  loginBtn: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 20,
  },
});

export default LoginScreen;
