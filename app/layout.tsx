import './globals.css';
import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Storya - AI Destekli Sesli Kitap Platformu',
  description: 'Kitaplarınızın sesli versiyonlarına anında erişin. Yapay zeka destekli sesli kitap deneyimi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}