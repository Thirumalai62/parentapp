import React, {useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {windowWidth} from '../../utils/Dimensions';

const HomeScreen = ({navigation}) => {
  const slideRef = useRef();
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: windowWidth,
          height: 120,
          backgroundColor: '#ccc',
        }}></View>
    );
  };
  const settings = {
    width: windowWidth - 80,
    height: 150,
    // itemWidth: windowWidth - 80,
    data: [...new Array(4).keys()],
    renderItem: renderItem,
    // hasParallaxImages: true,
  };
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
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Srini, IV - B</Text>
          <ImageBackground
            source={require('../../images/home/profile.jpg')}
            style={styles.profileAvatar}
            imageStyle={{borderRadius: 25}}
          />
        </View>
        {/* <View style={styles.todayHomeWorkDetails}>
          <Text style={styles.homeWorkTitle}>Today's Home Work</Text>
          <Text style={styles.homeWorkText}>See All</Text>
        </View> */}
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              width: windowWidth - 210,
              height: 150,
              backgroundColor: '#000',
              marginBottom: 20,
              borderRadius: 20,
            }}></View>
          <View
            style={{
              width: windowWidth - 210,
              height: 150,
              backgroundColor: '#ccc',
              marginBottom: 20,
              borderRadius: 20,
            }}></View>
          <View
            style={{
              width: windowWidth - 210,
              height: 150,
              backgroundColor: '#ccc',
              marginBottom: 20,
              borderRadius: 20,
            }}></View>
          <View
            style={{
              width: windowWidth - 210,
              height: 150,
              backgroundColor: '#000',
              marginBottom: 20,
              borderRadius: 20,
            }}></View>
        </View> */}
        {/* Slider */}
        <View>
          <Carousel
            // loop
            // // width={windowWidth - 45}
            // height={150}
            // data={[...new Array(6).keys()]}
            // scrollAnimationDuration={1000}
            // // onSnapToItem={index => console.log('current index:', index)}
            // renderItem={({index}) => (
            //   <View
            //     style={{
            //       flex: 1,
            //       borderWidth: 1,
            //       justifyContent: 'center',
            //     }}>
            //     <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
            //   </View>
            // )}
            {...settings}
          />
        </View>
        {/* end slider */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#29375F',
  },
  profileAvatar: {
    width: 45,
    height: 45,
  },
  todayHomeWorkDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeWorkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#29375F',
  },
  homeWorkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#29375FCC',
  },
});

export default HomeScreen;
