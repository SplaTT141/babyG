import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CollectionPage } from "./pages/CollectionPage";
import { LoginPage } from "./pages/LoginPage";

export function App() {

  return (
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
  )
}

