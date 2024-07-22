import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockData = [
  { id: '1', name: 'Starbucks', amount: '12.00', date: '2024-07-19', location: 'Toronto, ON' },
  { id: '2', name: 'Apple Store', amount: '101.00', date: '2024-07-18', location: 'Vancouver, BC' },
  { id: '3', name: 'Sephora', amount: '120.00', date: '2024-07-17', location: 'Montreal, QC' },
  { id: '4', name: 'Shoppers Drug Mart', amount: '12.00', date: '2024-07-16', location: 'Calgary, AB' },
  { id: '5', name: 'Pizza Hut', amount: '24.00', date: '2024-07-15', location: 'Ottawa, ON' },
  { id: '6', name: 'Cheesecake Factory', amount: '45.00', date: '2024-07-14', location: 'Edmonton, AB' },
  { id: '7', name: 'Nike', amount: '250.00', date: '2024-07-13', location: 'Halifax, NS' },
  { id: '8', name: 'Tim Hortons', amount: '7.89', date: '2024-07-12', location: 'Victoria, BC' },
  { id: '9', name: 'Whole Foods', amount: '78.00', date: '2024-07-11', location: 'Quebec City, QC' },
  { id: '10', name: 'Cineplex', amount: '42.50', date: '2024-07-10', location: 'Winnipeg, MB' },
];

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.itemText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>${item.amount}</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color="black" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemText: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontSize: 18,
    marginRight: 10,
    flex: 1,
  },
  amount: {
    fontSize: 18,
    color: 'green',
    marginRight: 10,
  },
});

export default TransactionsList;
