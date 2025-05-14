import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{user.last_name}</Text> {user.first_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    marginBottom: 3,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    color: '#444',
  },
});
