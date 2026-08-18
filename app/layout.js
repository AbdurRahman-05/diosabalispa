import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ZenSoundscape from './components/ZenSoundscape';
import FootReflexologyFloating from './components/FootReflexologyFloating';

export const metadata = {
  title: "Diosa Bali Spa & Luxury Wellness Sanctuary",
  description: "A high-end luxury wellness sanctuary offering bespoke massages, organic skincare facials, and holistic body rituals to restore your mind, body, and spirit.",
  keywords: ["Diosa Bali Spa", "Luxury Spa", "Balinese Massage", "Wellness Sanctuary", "Facial Skincare", "Organic Body Wraps"],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
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
