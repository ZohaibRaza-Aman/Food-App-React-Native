import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Config/colors';
import foods from '../Config/foodsObj';
import {PrimaryButton} from '../Components/FoodButton';

const FoodCartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    const cartItemCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.count,
      0,
    );
    if (cartItemCount >= 10) {
      alert("You can't add more than 10 items to the cart.");
      return;
    }

    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, count: cartItem.count + 1}
            : cartItem,
        ),
      );
    } else {
      setCartItems([...cartItems, {...item, count: 1}]);
    }
  };

  const removeFromCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      if (existingItem.count === 1) {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
      } else {
        setCartItems(
          cartItems.map(cartItem =>
            cartItem.id === item.id
              ? {...cartItem, count: cartItem.count - 1}
              : cartItem,
          ),
        );
      }
    }
  };

  const CartCard = ({item}) => {
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
    const count = itemInCart ? itemInCart.count : 0;

    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{height: 100, marginLeft: 10, paddingVertical: 20, flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{count}</Text>
          <View style={style.actionBtn}>
            <TouchableOpacity onPress={() => removeFromCart(item)}>
              <Icon
                name="minus"
                size={20}
                style={{color: 'white', marginTop: 4, marginEnd: 10}}
              />
            </TouchableOpacity>
            <Text
              style={{borderRightWidth: 2, borderRightColor: 'grey'}}></Text>
            <Icon
              onPress={() => addToCart(item)}
              name="plus"
              size={20}
              style={{color: 'white', marginTop: 4, marginStart: 10}}
            />
          </View>
        </View>
      </View>
    );
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0,
    );
    return totalPrice.toFixed(2);
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                ${getTotalPrice()}
              </Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default FoodCartScreen;
