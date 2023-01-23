/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

export default function MealItem({ id,title, imageUrl, duration, complexity, affordability }) {
  const navigation =useNavigation();
  function selectMealItemHandler(){
    navigation.navigate('MealDetailScreen',{
      mealId:id
   });
  }
  
  return (
    <View style={styles.MealItem}>
      <Pressable android_ripple={{color:'ccc'}}
      style={({pressed})=>(pressed? styles.buttonPressed:null)}
      onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View style={styles.itemImage}>
            <Image source={{ uri: imageUrl }} style={styles.Image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  itemImage: {
    alignItems: 'center',
  },
  buttonPressed:{
    opacity:0.5,
  }
});
