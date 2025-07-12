import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { Login } from './containers/Login';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import AppProvider from './hooks';
//import { Header } from './components/Header';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <ThemeProvider theme={standardTheme}>
  //     <AppProvider>
  //       {/* <Login/> */}
  //       <Elements stripe={stripePromise}>
  //         <RouterProvider router={router} />
  //       </Elements>
  //       <GlobalStyles />
  //       <ToastContainer autoClose={2000} />
  //     </AppProvider>
  //   </ThemeProvider>
  // </StrictMode>

   <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        {/* <Login/> */}
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);