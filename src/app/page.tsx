'use client';
import Booklet from './Booklet/Booklet';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Synopsis from './Synopsis/Synopsis';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <Synopsis />
      <Booklet />
      <Footer />
    </div>
  );
}
