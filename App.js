import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Đảm bảo đường dẫn đúng
import AppNavigator from './AppNavigator'; // Đảm bảo đường dẫn đúng

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
