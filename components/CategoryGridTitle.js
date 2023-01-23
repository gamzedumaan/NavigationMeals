import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import React from 'react';

export default function CategoryGridTitle({ title, color,onPress }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: 'white' }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
