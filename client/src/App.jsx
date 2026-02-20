import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/public/HomePage";
import { AboutPage } from "./pages/public/AboutPage";
import { ContactPage } from "./pages/public/ContactPage";
import { CollectionPage } from "./pages/public/CollectionPage";
import { LoginPage } from "./pages/public/LoginPage";
import { UserContextWrapper } from "./context/UserContextWrapper";

export function App() {

  return (
    <UserContextWrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apie-mus" element={<AboutPage />} />
          <Route path="/kolekcija" element={<CollectionPage />} />
          <Route path="/kontaktai" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer  />
      </BrowserRouter>
    </UserContextWrapper>
  )
}

