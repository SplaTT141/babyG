import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"

export function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/apie-mus" element={<AboutPage />}></Route>
        <Route path="/kontaktai" element={<ContactPage />}></Route>
      </Routes>
      <Footer  />
    </BrowserRouter>
  )
}

