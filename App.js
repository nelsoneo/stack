import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import { createStore} from 'redux';
import reducers from './src/reducers';
import { Header} from './src/components/common';
import LibraryList from './src/components/LibraryList'; 

const App = () => {
  return (
    <Provider store = {createStore(reducers)}>
      <View style = {{flex: 1}}>
        <Header headText = 'Tech Stack' />
        <LibraryList /> 
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
