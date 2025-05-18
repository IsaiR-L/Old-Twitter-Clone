import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Chirp</Text>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => router.push('./(Auths)/message_page')}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/timeline')}>
          <Ionicons name="person-circle-outline" size={26} color="black" style={{ marginLeft: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});