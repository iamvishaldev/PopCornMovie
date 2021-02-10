import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import Search from './screens/Search';
import Home from './screens/Home';

const Stack = createStackNavigator();

// function  MyStack(){
//   return(
//     <View style={styles.container}>
//       <Stack.Navigator screenOptions={{
//     headerShown: false
//   }} >
//     <Stack.Screen name="Search" component={Search}/>
//     <Stack.Screen name="Home" component={Home}/>
//     <Stack.Screen />
//       </Stack.Navigator>
//     </View>
//   )
// }

 export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 20 : 0
  },
});

