import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const CartScreen = () => {
  const [quantity, setQuantity] = useState(2);

  const handleQuantityChange = (amount) => {
    setQuantity(Math.max(0, quantity + amount)); // Prevent going below 0
  };

  const handleAddressPress = () => {
    // Logic to handle address press
    console.log('Address pressed');
  };

  const handleEditPress = () => {
    // Logic to handle edit press
    console.log('Edit pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Entypo name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.productImage}>
          <Image
            source={{uri :'https://static.vecteezy.com/system/resources/thumbnails/029/490/063/small_2x/fresh-tasty-beef-burger-with-little-steam-on-dark-background-homemade-hamburger-commercial-promotional-food-ai-generative-photo.jpg'}}
            style={styles.image}
          />
        </View>
      <View style={styles.productContainer}>
        
      
        <View style={styles.productDetails}>
        <View>
        <Text style={styles.productName}>BURGER</Text>
          <View style={styles.rating}>
            <Entypo name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
          </View>
        </View>
        <View>
        <Text style={styles.productPrice}>$28</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(-1)}>
              <Entypo name="minus" size={10} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(1)}>
              <Entypo name="plus" size={10} color="black" />
            </TouchableOpacity>
          </View>
          
        </View>
        
        </View>
      </View>
      <View style={styles.addressAndEdit}>
      <TouchableOpacity style={styles.addressContainer} onPress={handleAddressPress}>
        <View style={styles.addressIcon}>
          <Entypo name="location-pin" size={24} color="black" />
        </View>
        <View style={styles.addressDetails}>
          <Text style={styles.addressText}>Delivery Address</Text>
          <Text style={styles.addressText}>Hanoi, VietNam</Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Entypo name="edit" size={20} color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.paymentContainer}>
        <View style={styles.paymentIcon}>
          <Entypo name="credit-card" size={50} color="black" />
        </View>
        <Text style={styles.paymentText}>Payment Method</Text>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>    Change    </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Checkout Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Subtotal ({quantity})</Text>
          <Text style={styles.summaryPrice}>$56</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryPrice}>$6.20</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Payable Total</Text>
          <Text style={styles.summaryPricea}>$62.20</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmOrderButton}>
        <Text style={styles.confirmOrderText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addressAndEdit:{
    flexDirection:'row',
    height:70,
  },
  container: {
    flexGrow: 1,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fafad2',
    elevation: 2,
    height:100,
    zIndex:1,
    borderRadius: 10,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    padding: 8,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    zIndex:4,
    margin: 16,
    
    
    
  },
  productImage: {
    width: 300,
    height: 200,
    zIndex:2,
    marginTop:-20,
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginLeft: 30,
    borderRadius: 10,
    
  },
  productDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius:5,
    marginTop:-30,
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    padding: 5,
    borderRadius: 100,
    borderWidth:1,
    borderColor:'#a9a9a9',
  },
  quantity: {
    fontSize: 15,
    marginHorizontal: 8,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'right',
    color: '#A9A6FF',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#7fffd4',
    marginLeft:23,
    elevation: 2,
    borderRadius: 4,
    width:250,
  },
  addressIcon: {
    marginRight: 16,
  },
  addressDetails: {
    flex: 1,
  },
  addressText: {
    fontSize: 16,
  },
  editButton: {
    padding: 8,
    backgroundColor: '#A9A6FF',
    borderRadius: 4,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width:50,
    height:70,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
   
    margin: 16,
    marginTop: -8,
  },
  paymentIcon: {
    marginRight: 16,
  },
  paymentText: {
    fontSize: 16,
    
  },
  changeButton: {
    padding: 8,
    borderRadius: 30,
    borderColor:'#0000FF',
    borderWidth: 1,
    marginLeft:40,
    height:40,
  },
  changeButtonText: {
    marginTop: 2,
    fontSize: 12,
    color:'#0000FF',
  },
  summaryContainer: {
    padding: 16,
    
    margin: 16,
    marginTop: -30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingTop: 8, // Add padding at the bottom
    borderTopWidth: 1, // Add border width
    borderTopColor: '#e0e0e0', // Add border color
  },
  summaryText: {
    fontSize: 16,
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryPricea: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#0000FF',
  },
  confirmOrderButton: {
    padding: 16,
    backgroundColor: '#0000FF',
    margin: 16,
    borderRadius: 29,
  },
  confirmOrderText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartScreen;
