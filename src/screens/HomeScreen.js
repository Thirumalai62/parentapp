import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Image1 from '../images/home/game-1.jpeg';
import Image2 from '../images/home/game-2.jpeg';
import Image3 from '../images/home/game-3.png';

const HomeScreen = () => {
  const slides = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image2,
    },
    {
      id: 3,
      image: Image3,
    },
  ];
  // const renderBanner = ({item, index}) => {
  //   return <BannerSlider data={item} />;
  // };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScrollView
        style={{
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Hello John Doe
          </Text>
          <ImageBackground
            source={require('../images/home/profile.jpg')}
            style={{width: 45, height: 45}}
            imageStyle={{borderRadius: 25}}
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
          }}>
          <MaterialIcons
            name="search"
            size={20}
            color="#c6c6c6"
            style={{
              marginRight: 5,
            }}
          />
          <TextInput placeholder="Search" />
        </View>
        {/* Upcoming Schedules */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#0aada8',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
