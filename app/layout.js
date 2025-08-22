// app/layout.js
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // specify available weights
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
