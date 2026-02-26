import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/public/HomePage";
import { AboutPage } from "./pages/public/AboutPage";
import { ContactPage } from "./pages/public/ContactPage";
import { CollectionPage } from "./pages/public/CollectionPage";
import { LoginPage } from "./pages/public/LoginPage";
import { UserContextWrapper } from "./context/UserContextWrapper";
import { LogoutPage } from "./pages/public/LogoutPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { PublicLayout } from "./templates/PublicLayout";
import { AdminLayout } from "./templates/AdminLayout";
import { NotFoundPage } from "./pages/public/NotFoundPage";
import { AdminOverviewPage } from "./pages/admin/AdminOverviewPage";
import { AdminOrdersPage } from "./pages/admin/AdminOrdersPage copy";
import { AdminStatsPage } from "./pages/admin/AdminStatsPage";
import { AdminCustomersPage } from "./pages/admin/AdminCustomersPage";
import { AdminStoragePage } from "./pages/admin/AdminStoragePage";

export function App() {

  return (
    <UserContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/apie-mus" element={<AboutPage />} />
            <Route path="/kolekcija" element={<CollectionPage />} />
            <Route path="/kontaktai" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/apzvalga" element={<AdminOverviewPage />} />
            <Route path="/admin/sandelis" element={<AdminStoragePage />} />
            <Route path="/admin/uzsakymai" element={<AdminOrdersPage />} />
            <Route path="/admin/statistika" element={<AdminStatsPage />} />
            <Route path="/admin/klientai" element={<AdminCustomersPage />} />
          </Route>

          <Route element={<PublicLayout />}>
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextWrapper>
  )
}

