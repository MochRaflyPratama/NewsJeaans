// Import dependencies
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Content = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['New Posts', 'All', 'Trending', 'For You'];

  // Fetch news from NewsAPI
  const fetchNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=2096149abe254996882639a7c7972401'
      );
      const data = await response.json();
      setNewsArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleCard}>
      <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleSource}>{item.source.name}</Text>
        <Text style={styles.articleTitle} numberOfLines={2}>{item.title}</Text>
        <View style={styles.articleStats}>
          <Text style={styles.statText}>❤️ 5.1M likes</Text>
          <Text style={styles.statText}>👁️ 10M views</Text>
          <Text style={styles.statText}>💬 1.5K comments</Text>
          <Text style={styles.statText}>🕒 1 Day ago</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NewsJeans</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* News Articles */}
      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      ) : (
        <FlatList
          data={newsArticles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderArticle}
          contentContainerStyle={styles.articleList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleList: {
    paddingHorizontal: 10,
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 200,
  },
  articleContent: {
    padding: 10,
  },
  articleSource: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statText: {
    fontSize: 12,
    color: '#666',
    marginRight: 15,
    marginBottom: 5,
  },
});

export default Content;
