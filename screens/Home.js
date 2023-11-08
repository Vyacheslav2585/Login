import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.home}>
      <TouchableOpacity >
        <Text style={styles.text1}>Hello World!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1:{
    fontSize:20
  }
  
});

export default Home;