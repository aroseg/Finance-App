import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions List' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
      name="Transactions" 
      component={TransactionsStack} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="list" color={color} size={size}/>),
        headerShown: false}}/>
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="pie-chart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
