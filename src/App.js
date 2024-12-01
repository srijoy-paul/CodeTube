import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import store from "./utils/store"
import MainContentSection from './components/MainContentSection';
import VideosSection from './components/VideosSection';
import WatchPage from './components/WatchPage';

// require('dotenv').config();
const appRouter = createBrowserRouter([{
  path: '/',
  element: <MainContentSection />,
  children: [
    {
      path: "/",
      element: <VideosSection />
    }, {
      path: "/watch",
      element: <WatchPage />
    }
  ]
}]);

console.log("what createBrowserRouter returns", appRouter);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="flex w-full h-full">
          <Sidebar />
          <div className='w-full overflow-x-auto'>
            <RouterProvider router={appRouter} />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
