import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import NewsCard from '../../components/NewsCard';

const NewsScreen = () => {
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
        {[...Array(10)].map(index => (
          <NewsCard key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
