
import { Provider } from 'react-redux';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header'

import store from "./utils/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
