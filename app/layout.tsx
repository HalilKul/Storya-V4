import './globals.css';
import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Storya - AI Destekli Sesli Kitap Platformu',
  description: 'Kitaplarınızın sesli versiyonlarına anında erişin. Yapay zeka destekli sesli kitap deneyimi.',
  themeColor: '#4338ca',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}