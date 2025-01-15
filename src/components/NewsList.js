import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=2096149abe254996882639a7c7972401'
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.urlToImage }} style={styles.postImage} />
      <Text style={styles.publisher}>{item.source.name}</Text>
      <Text style={styles.postTitle}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderPost}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.postsList}
    />
  );
};

const styles = StyleSheet.create({
  postsList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  publisher: {
    padding: 10,
    fontSize: 14,
    color: '#555',
  },
  postTitle: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewsList;
