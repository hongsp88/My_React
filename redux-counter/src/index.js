import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

// Redux 관련 불러오기
import { createStore } from 'redux'
import reducers from './modules';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
