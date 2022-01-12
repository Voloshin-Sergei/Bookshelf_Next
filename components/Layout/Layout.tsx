import { ReactNode, FC } from 'react';
import Head from 'next/head';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header text="Bookshelf" color="text-secondary" />
      <main>{children}</main>
      <Footer />
    </>
  );
};
