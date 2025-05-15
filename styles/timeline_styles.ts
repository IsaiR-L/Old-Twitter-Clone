import { StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // for icons
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';


const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  tweetContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 16,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
    color: '#1DA1F2', // Twitter blue
  },
  content: {
    fontSize: 16,
  },
});
