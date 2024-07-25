import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView
} from 'react-native';
import { Platform } from 'react-native';
const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
        <Text style={styles.headerText}></Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{uri:'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/395077657_1028692314925861_8525541017069530325_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oQpvZlUmqtoQ7kNvgHUFgtT&_nc_ht=scontent.fhan14-1.fna&oh=00_AYCfSZLou7qqIJKVnsLRR2CsYiXMklsgXqFOGe7rY1h7YQ&oe=66A5A02A'}}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>         VietND</Text>
          <Text style={styles.profileEmail}>vietnd61004@gmail.com</Text>
        </View>
      </View>
      <View style={styles.menuContainer}>
      <View style={styles.menuItemContainer}>
      <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text>{'🏠'}</Text>
          </View>
          <Text style={styles.menuItemText}>    Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text>{'🗃️'}</Text>
          </View>
          <Text style={styles.menuItemText}    >    My Card</Text>
        </TouchableOpacity>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text>{'🌙'}</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.menuItemText}>    Dark Mood</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={Platform.OS === 'android' ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => console.log('Switch')}
              value={false}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text>{'📍'}</Text>
          </View>
          <Text style={styles.menuItemText}>    Track Your Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text>{'⚙️'}</Text>
          </View>
          <Text style={styles.menuItemText}>    Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Text>{'❓'}</Text>
          </View>
          <Text style={styles.menuItemText}>    Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      </View>
        
      </View>
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuItemContainer:{
    marginTop:80,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    borderRadius:10,
    padding: 30,
    justifyContent:'space-between',
    backgroundColor:'#fafad2',
    height:100,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    marginTop:-40,
    justifyContent:'center',
    zIndex:4,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  menuContainer: {
    marginTop: 16,
    backgroundColor:'#fafad2',
    borderRadius:10,
    height:600,
    marginTop:-80,
    zIndex:3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',

  },
  menuIcon: {
    marginRight: 16,
    fontSize: 20,
  },
  menuItemText: {
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    
  },
  logoutButton: {
    backgroundColor: '#4a90e2',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;