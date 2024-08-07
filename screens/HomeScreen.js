import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLocation, selectFoodCategory, setFoodCategory } from '../redux/slices/appSlice';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const foodCategory = useSelector(selectFoodCategory);

  const handleCategoryClick = (category) => {
    dispatch(setFoodCategory(category));
  };

  const swiperItems = [
    'https://www.shutterstock.com/image-vector/delicious-homemade-burger-splashing-cola-600nw-1805776183.jpg',
    'https://i.ytimg.com/vi/y0qgcvmfg_4/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7h4LsJuWzvLW5ZSo4oec0wTfAobs6mapOfQ&s'
  ];

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
        <View style={styles.carouselContainer}>
          <Swiper
            style={styles.swiper}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
          >
            {swiperItems.map((item, index) => (
              <View key={index} style={styles.slide}>
                <Image source={{ uri: item }} style={styles.swipeImage} />
              </View>
            ))}
          </Swiper>
        </View>
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
  carouselContainer: {
    marginTop: -5,
    marginVertical: 20,
    height: 200,
    
  },
  swiper: {
    height: '100%',
    
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  swipeImage: {
    width: screenWidth, // Full width of the screen
    height: '100%',
    borderRadius: 10,
  },
  dot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#61dafb',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  pagination: {
    bottom: 10,
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
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    padding: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-20,
    marginLeft:10,
    marginRight:10
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
    
  },
  categoryContainer: {
    flexDirection: 'row',
    height:100,
    marginTop:10,
    marginBottom:30,
    marginLeft:10,
    marginRight:10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor:'#fafad2',
    width:80,
  },
  categoryText: {
    fontWeight: 'bold',
  },
  categoryIcon: {
    fontSize: 24,
  },
  activeCategory: {
    backgroundColor: '#61dafb',
  },
  middleText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  popularItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ViewAllText: {
    color: '#61dafb',
  },
  popularItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularItem: {
    width: (screenWidth - 40) / 2,
    marginRight: 10,
  },
  popularItemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  popularItemText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

