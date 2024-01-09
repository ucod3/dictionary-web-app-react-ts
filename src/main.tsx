import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import ThemeProvider from './components/ThemeProvider';
import FontProvider from './components/FontProvider';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </StrictMode>,
);
