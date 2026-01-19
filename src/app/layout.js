import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'Aurora Classical Dance Studio',
  description: 'Timeless, Graceful, and Disciplined. Experience the art of classical dance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        <Navbar />
        <main style={{ paddingTop: 'var(--header-height)', minHeight: '80vh' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: 'var(--color-midnight-blue)', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
          <div className="container" style={{ textAlign: 'center', opacity: 0.8 }}>
            <p>&copy; {new Date().getFullYear()} Aurora Classical Dance Studio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
