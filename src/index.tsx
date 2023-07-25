import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider  } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { Home, Dashboard, SignIn } from './components/index';
import './index.css'
import { theme } from './Theme/themes';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Home title={'Car Inventory'}/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
