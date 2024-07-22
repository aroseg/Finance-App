import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00, date: '2024-07-19', location: 'Toronto, ON' },
  { id: '2', name: 'Apple Store', amount: 101.00, date: '2024-07-18', location: 'Vancouver, BC' },
  { id: '3', name: 'Sephora', amount: 120.00, date: '2024-07-17', location: 'Montreal, QC' },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00, date: '2024-07-16', location: 'Calgary, AB' },
  { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2024-07-15', location: 'Ottawa, ON' },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2024-07-14', location: 'Edmonton, AB' },
  { id: '7', name: 'Nike', amount: 250.00, date: '2024-07-13', location: 'Halifax, NS' },
  { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2024-07-12', location: 'Victoria, BC' },
  { id: '9', name: 'Whole Foods', amount: 78.00, date: '2024-07-11', location: 'Quebec City, QC' },
  { id: '10', name: 'Cineplex', amount: 42.50, date: '2024-07-10', location: 'Winnipeg, MB' },
];

const calculateSummary = (transactions) => {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const count = transactions.length;
  const highestTransaction = transactions.reduce((max, transaction) => (transaction.amount > max.amount ? transaction : max), transactions[0]);
  const lowestTransaction = transactions.reduce((min, transaction) => (transaction.amount < min.amount ? transaction : min), transactions[0]);
  
  return {
    totalExpenses,
    count,
    highestTransaction,
    lowestTransaction,
  };
};

const Summary = () => {
  const { totalExpenses, count, highestTransaction, lowestTransaction } = calculateSummary(transactions);

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryLabel}>Transactions:</Text>
        <Text style={styles.summaryValue}>{count}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.summaryItem}>
        <Text style={styles.summaryLabel}>Balance:</Text>
        <Text style={styles.summaryValue}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.summaryItem}>
        <Text style={styles.highLowLabel}>High Spending:</Text>
        <Text style={styles.summaryValue}>${highestTransaction.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.transactionName}>{highestTransaction.name }</Text>
      <View style={styles.separator} />
      <View style={styles.summaryItem}>
        <Text style={styles.highLowLabel}>Low Spending:</Text>
        <Text style={styles.summaryValue}>${lowestTransaction.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.transactionName}>{lowestTransaction.name}</Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5, 
    paddingVertical: 4, 
  },
  summaryLabel: {
    fontSize: 18,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  highLowLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  transactionName: {
    fontSize: 18,
    marginBottom: 5, 
  },
  separator: {
    height: 2,
    backgroundColor: '#aaa',
    marginVertical: 5, 
  },
});

export default Summary;
