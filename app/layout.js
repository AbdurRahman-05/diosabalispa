import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ZenSoundscape from './components/ZenSoundscape';
import FootReflexologyFloating from './components/FootReflexologyFloating';

export const metadata = {
  title: "Aura & Zen | Diosa Bali Spa & Luxury Wellness Sanctuary",
  description: "Immerse yourself in Aura & Zen. A high-end luxury wellness sanctuary offering bespoke massages, organic skincare facials, and holistic body rituals to restore your mind, body, and spirit.",
  keywords: ["Diosa Bali Spa", "Luxury Spa", "Balinese Massage", "Wellness Sanctuary", "Facial Skincare", "Organic Body Wraps"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Great+Vibes&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <ZenSoundscape />
        <FootReflexologyFloating />
      </body>
    </html>
  );
}
