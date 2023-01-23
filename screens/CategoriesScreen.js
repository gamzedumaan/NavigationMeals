import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CategoryGridTitle from '../components/CategoryGridTitle';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen() {
  const navigation = useNavigation();

  function renderCategoryItem(itemData) {
    function pressHandler() { 
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        navigation={navigation}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
