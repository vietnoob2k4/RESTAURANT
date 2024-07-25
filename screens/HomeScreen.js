import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLocation, selectFoodCategory, setFoodCategory } from '../redux/slices/appSlice';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const foodCategory = useSelector(selectFoodCategory);

  const handleCategoryClick = (category) => {
    dispatch(setFoodCategory(category));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/395077657_1028692314925861_8525541017069530325_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oQpvZlUmqtoQ7kNvgHUFgtT&_nc_ht=scontent.fhan14-1.fna&oh=00_AYCfSZLou7qqIJKVnsLRR2CsYiXMklsgXqFOGe7rY1h7YQ&oe=66A5A02A' }} style={styles.profileImage} />
        <View style={styles.location}>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.locationValue}>Tay Ho, Hanoi</Text>
        </View>
        <View style={styles.notification}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/366/202/original/bell-icon-transparent-notification-free-png.png' }} style={styles.bellIcon} />
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="   🔍 Search your food" placeholderTextColor="#fff" />
        </View>
        <ScrollView horizontal={true} style={styles.categoryContainer} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.categoryButton, foodCategory === 'pizza' && styles.activeCategory]}
            onPress={() => handleCategoryClick('pizza')}
          >
            <Text style={styles.categoryIcon}>🍕</Text>
            <Text style={styles.categoryText}>PIZZA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, foodCategory === 'burger' && styles.activeCategory]}
            onPress={() => handleCategoryClick('burger')}
          >
            <Text style={styles.categoryIcon}>🍔</Text>
            <Text style={styles.categoryText}>BURGER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, foodCategory === 'drink' && styles.activeCategory]}
            onPress={() => handleCategoryClick('drink')}
          >
            <Text style={styles.categoryIcon}>🍹</Text>
            <Text style={styles.categoryText}>DRINK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, foodCategory === 'rice' && styles.activeCategory]}
            onPress={() => handleCategoryClick('rice')}
          >
            <Text style={styles.categoryIcon}>🍚</Text>
            <Text style={styles.categoryText}>RICE</Text>
          </TouchableOpacity>
          {/* Add more categories here if needed */}
        </ScrollView>
        <ScrollView horizontal={true} style={styles.imageScrollContainer} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: 'https://www.shutterstock.com/image-vector/delicious-homemade-burger-splashing-cola-600nw-1805776183.jpg' }} style={styles.swipeImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: 'https://i.ytimg.com/vi/y0qgcvmfg_4/maxresdefault.jpg' }} style={styles.swipeImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7h4LsJuWzvLW5ZSo4oec0wTfAobs6mapOfQ&s' }} style={styles.swipeImage} />
          </TouchableOpacity>
          {/* Add more images here if needed */}
        </ScrollView>
        <View style={styles.middleText}>
          <Text style={styles.popularItemsText}>Popular items</Text>
          <TouchableOpacity><Text style={styles.ViewAllText}>View All</Text></TouchableOpacity>
        </View>
        <View style={styles.popularItems}>
          <TouchableOpacity style={styles.popularItem}>
            <Image source={{ uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRRto3IlY56MlAIOAvXHvPEVxBDVzG1uz1zULEBYdJ-I4Aa-xOyPEVvv7fmIjLnxaOz' }} style={styles.popularItemImage} />
            <Text style={styles.popularItemText}>Burger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularItem}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg' }} style={styles.popularItemImage} />
            <Text style={styles.popularItemText}>Pizza</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popularItems}>
          <TouchableOpacity style={styles.popularItem}>
            <Image source={{ uri: 'https://img.delicious.com.au/eu_H94YD/del/2023/11/anna-polyvious-fairy-bread-cake-202220-2.jpg' }} style={styles.popularItemImage} />
            <Text style={styles.popularItemText}>Cake</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularItem}>
            <Image source={{ uri: 'https://www.allrecipes.com/thmb/MUoXEKHm5mE664F5X4O6N2QsUAs=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/60564-StrawberryCakeFromScratch-ddfms-4X3-0291-1-cd8254e28ea14112b5fc49e25cd08ff6.jpg' }} style={styles.popularItemImage} />
            <Text style={styles.popularItemText}>Cake</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageScrollContainer: {
    marginTop: -5,
    marginVertical: 20,
    height: 150, // Adjust the height of the swipeable image container
  },
  imageContainer: {
    marginHorizontal: 5,
    width: 290,
  },
  swipeImage: {
    width: 280, // Adjust the width of each image
    height: 150, // Adjust the height of each image
    borderRadius: 10,
  },
  middleText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  popularItemsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ViewAllText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bellIcon: {
    width: 40,
    height: 40,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    backgroundColor: '#fafad2',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 50, // Increased padding to cover half of the search bar's height
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15, // Added border radius for rounded effect
    borderBottomRightRadius: 15, // Added border radius for rounded effect
  },
  location: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  locationText: {
    color: 'black',
  },
  locationValue: {
    color: 'black',
    fontWeight: 'bold',
  },
  notification: {
    position: 'relative',
  },
  searchBar: {
    marginTop: -14,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#0000FF', // Blue background color
    color: '#fff', // White text color
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25, // Rounded corners
    marginHorizontal: 5,
  },
  categoryContainer: {
    marginTop: -5,
    marginVertical: 20,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 80,
    height: 100,
    marginHorizontal: 5, // Add margin between categories
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  activeCategory: {
    backgroundColor: '#61dafb',
  },
  popularItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,

  },
  popularItem: {
    width: '48%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  popularItemImage: {
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  popularItemText: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen;
