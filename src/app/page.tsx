"use client";
import Accommodation from "./Accommodation/Accommodation";
import Booklet from "./Booklet/Booklet";
import Dress from "./Dress/Dress";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Schedule from "./Schedule/Schedule";
import Shuttle from "./Shuttle/Shuttle";
import Synopsis from "./Synopsis/Synopsis";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <Synopsis />
      <Schedule />
      <Accommodation />
      <Shuttle />
      <Dress />
      <Booklet />
      <Footer />
    </div>
  );
}
