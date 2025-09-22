import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Splash from '@/pages/Splash';
import Welcome from '@/pages/Welcome';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import OrderComplete from '@/pages/OrderComplete';
import DeliveryStatus from '@/pages/DeliveryStatus';
import Profile from '@/pages/Profile';
import '@/styles/global.less';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/order-complete',
    element: <OrderComplete />,
  },
  {
    path: '/delivery-status',
    element: <DeliveryStatus />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
