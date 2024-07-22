import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.location}>{transaction.location}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Transaction Date:</Text>
        <Text style={styles.date}>{formatDate(transaction.date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f4f4', 
    },
    detailsContainer: {
      padding: 15,
      backgroundColor: '#0000FF', 
      borderRadius: 10,
      borderColor: '#ddd', 
      borderWidth: 1,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, 
      marginBottom: 20, 
      alignItems: 'center', 
      width: '100%', 
    },
    name: {
      fontSize: 18, 
      marginBottom: 5,
      fontWeight: 'bold',
      color: '#ffffff', 
    },
    amount: {
      fontSize: 28, 
      color: '#ffffff', 
      marginBottom: 5,
    },
    location: {
      fontSize: 18, 
      color: '#ffffff', 
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      paddingVertical: 10, 
    },
    dateLabel: {
      fontSize: 18,
      fontWeight: 'bold', 
      color: 'gray',
    },
    date: {
      fontSize: 18,
      color: 'black',
    },
  });
  

export default TransactionDetailScreen;
