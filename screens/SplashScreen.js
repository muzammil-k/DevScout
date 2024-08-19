import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0
  const splashScale = useRef(new Animated.Value(1)).current;  // Initial value for scale: 1

  useEffect(() => {
    const splashScreenTimer = setTimeout(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(splashScale, {
          toValue: 0.8,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(() => {
        clearTimeout(splashScreenTimer);
        navigation.replace('Login');
      });
    }, 4500); // 3 seconds
  }, []);

  const splashStyle = {
    opacity: fadeAnim,
    transform: [{ scale: splashScale }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.splash, splashStyle]}>
        <Text style={styles.text}>DevScout</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#163C56',
  },
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#163C56',
  },
});

export default SplashScreen;