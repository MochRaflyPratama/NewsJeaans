import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>News Jeans</Text>
      <View style={styles.headerIcons}>
        <Icon style={styles.icon} name="search" size={24} color="#000" />
        <Icon name="bell" size={24} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    elevation: 2,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
});

export default Header;