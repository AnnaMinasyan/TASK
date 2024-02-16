import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from '@/store/store';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/MainNavigation';

export default function App() {
  let [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((json) => setMovies(json.movies))
  }, [])

 
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF",
    paddingVertical:50
  },
});
