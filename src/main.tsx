import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import './i18/i18n.tsx'; // i18n dosyasını import edin


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
