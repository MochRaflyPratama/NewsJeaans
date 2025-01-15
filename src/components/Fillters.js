import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Filters = () => {
  return (
    <View style={styles.filters}>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>New Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Trending</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>For You</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#e5e5e5',
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Filters;