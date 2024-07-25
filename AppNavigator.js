import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import thư viện biểu tượng
import { Text } from 'react-native'; // Import Text từ react-native
import Home from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import InboxScreen from './screens/InboxScreen'
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Ẩn header cho tất cả các màn hình trong stack
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            } else if (route.name === 'Inbox'){
              iconName = 'inbox';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={18} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            if (route.name === 'Home') {
              label = 'Home';
            } else if (route.name === 'Cart') {
              label = 'Cart';
            } else if (route.name === 'Profile') {
              label = 'Profile';
            } else if (route.name ==='Inbox'){
              label = 'Inbox';
            }

            return <Text style={{ color, fontSize: 10, marginTop: -5, marginBottom: 10 }}>{label}</Text>;
          },
          tabBarActiveTintColor: '#61dafb',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#000', // Màu nền tab bar là đen
            borderTopWidth: 0, // Xóa viền trên cùng của tab bar (tùy chọn)
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
