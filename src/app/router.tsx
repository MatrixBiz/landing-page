import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import LandingPage from '../routes/_app/index';
import ContactsPage from '../routes/_contacts/index';
import PaymentDeliveryPage from '../routes/_payment-delivery/index';
import DealersPage from '../routes/_dealers/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'payment-delivery',
        element: <PaymentDeliveryPage />,
      },
      {
        path: 'dealers',
        element: <DealersPage />,
      },
    ],
  },
]);