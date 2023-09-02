'use client';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute='class' enableSystem={true}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
