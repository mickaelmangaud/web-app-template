import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { About, Home } from './screens';
import { ThemeSwitcher } from './components';
import { initInternationalization } from './config';
import reportWebVitals from './utils/reportWebVitals';

// Mui-React Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

initInternationalization();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeSwitcher>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ThemeSwitcher>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();