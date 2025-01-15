import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#ffffff',
          elevation: 2,
          paddingVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', // Membuat elemen di ujung kiri dan kanan
          paddingHorizontal: 10, // Memberikan jarak horizontal
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>News Jeans</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            style={{marginRight: 15}}
            name="search"
            size={30}
            color="#000000"
          />
          <Icon name="bell" size={30} color="#000000" />
        </View>
      </View>
              {/* Filters */}
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
    </View>
  );
};

export default Home;
