import {HomeScreen} from './src/screens/home';
import {Provider} from 'react-redux';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
