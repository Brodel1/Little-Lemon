import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ReserveProvider } from 'context/reserveContext';
import { ChakraProvider } from '@chakra-ui/react';
import Main from 'components/Main';
import Home from 'Pages/Home';
import Reservation from 'Pages/Reservation';
import theme from 'theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} errorElement={<Navigate to="/home" />}>
        <Route index={true} element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ReserveProvider>
        <RouterProvider router={router} />
      </ReserveProvider>
    </ChakraProvider>
  );
}

export default App;
