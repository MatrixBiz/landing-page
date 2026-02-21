import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/customers/CatalogPage";
import { RequestQuotePage } from "./pages/customers/RequestQuotePage";
import { ContactsPage } from "./pages/customers/ContactsPage";
import { PaymentDeliveryPage } from "./pages/customers/PaymentDeliveryPage";
import { DealersPage } from "./pages/dealers/DealersPage";
import { ServicePage } from "./pages/service/ServicePage";
import { CartPage } from "./pages/customers/CartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },
            { path: "catalog", Component: CatalogPage },
            { path: "request-quote", Component: RequestQuotePage },
            { path: "contacts", Component: ContactsPage },
            { path: "payment-delivery", Component: PaymentDeliveryPage },
            { path: "cart", Component: CartPage },
            { path: "dealers", Component: DealersPage },
            { path: "service", Component: ServicePage },
        ],
    },
]);
