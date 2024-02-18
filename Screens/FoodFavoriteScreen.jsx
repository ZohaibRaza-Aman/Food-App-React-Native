import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 18;

const FoodFavoriteScreen = ({route}) => {
  const [carditem, setCardItem] = useState([]);
  const {image, name, ingredients} = route.params;
  console.log(carditem, 'item');

  useEffect(() => {
    setCardItem(pre => [...pre, {image, name, ingredients}]);
  }, [image, name, ingredients]);

  return (
    <ScrollView style={styles.container}>
      {carditem
        ? carditem.map((item, key) => (
            <View key={key} style={styles.card}>
              <View style={{alignItems: 'center', top: -40}}>
                <Image
                  resizeMode="contain"
                  source={item.image}
                  style={styles.image}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.ingredients}>{item.ingredients}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ingredients: {
    fontSize: 14,
    color: 'grey',
    marginTop: 2,
  },
});

export default FoodFavoriteScreen;
