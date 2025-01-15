import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavigation = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="home" size={24} color="#000" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="search" size={24} color="#000" />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="th-list" size={24} color="#000" />
        <Text style={styles.navText}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="heart" size={24} color="#000" />
        <Text style={styles.navText}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="user" size={24} color="#000" />
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});

export default BottomNavigation;