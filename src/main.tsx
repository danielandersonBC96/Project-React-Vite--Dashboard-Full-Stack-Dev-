
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import { Provider } from 'react-redux/es/exports';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners} from '@reduxjs/toolkit/query';
import { api } from './states/Api';

export const store = configureStore({
  reducer: {[api.reducerPath]: api.reducer},
  middleware:( getdefault) => getdefault().concat(api.middleware),


});

setupListeners(store.dispatch)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <Provider store={store}>
       <App/>
  </Provider>
)
 