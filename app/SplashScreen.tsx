import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text } from 'react-native';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 5000, useNativeDriver: true }).start();
    const timer = setTimeout(() => router.replace('/HomeScreen'), 5000);
    return () => clearTimeout(timer);
  }, [fadeAnim, router]);

  return (
    <ImageBackground
      source={require('./assets/images/splash-bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Animated.View style={[styles.circle, { opacity: fadeAnim }]}>
        <Text style={styles.text}>منصة</Text>
      </Animated.View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 22, fontWeight: 'bold', color: 'white' },
});
