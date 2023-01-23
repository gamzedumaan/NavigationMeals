import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function MealsOverviewScreen({ route, navigation }) {
  //const { params } = useRoute();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

  function renderItemMeal(itemData) {
    return <MealItem {...itemData.item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItemMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
