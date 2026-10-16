import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './assets//index.css'
import App from "./pages/Home/App.tsx";
import MainLayout from "./pages/MainLayout.tsx";
import Footer from "./components/footer/Footer.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "./components/WPHero.tsx";
import Facebook from "./components/facebook.tsx";
import ArrayMapping from "./components/ArrayMapping.tsx";
import PostCard from "./components/PostCard.tsx";
import SigninSignup from "./pages/SigninSignup.tsx";
import SignUp from "./pages/signup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} />
          <Route path="/" element={<App />} />
          <Route path="/map" element={<ArrayMapping />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path='sign-in' element={<SigninSignup />} />
          <Route path='sign-up' element={<SignUp />} />
          
          <Route path="/post" element={
            <PostCard 
            textContent="I agree, why?..." 
            imgSrc="https://picsum.photos/400/300"
            avatarSrc="https://picsum.photos/40/"
            author="Bill Browning"
            date="43 minutes ago"
            numLikes={97}
            numComments={10}
            numReposts={15}
            />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
