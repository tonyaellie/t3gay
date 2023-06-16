import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'T3gay',
  description: 'A site celebrating gay t3 stuff 🤷‍♀️',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="/t3-dark.svg"
          rel="icon"
          media="(prefers-color-scheme:light)"
        />
        <link
          href="/t3-light.svg"
          rel="icon"
          media="(prefers-color-scheme:dark)"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
