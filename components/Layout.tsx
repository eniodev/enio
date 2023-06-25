import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://enio.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl lg:px-40 mx-auto md:px-8">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl lg:px-40 py-4 mx-auto md:px-8">{children}</div>
      </main>
      <footer className="py-8">
     <div className="max-w-5xl lg:px-40 mx-auto md:px-8">
          Find me on {' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://twitter.com/eniocarlosao"
          >
            twitter
          </a>
        </div> 

      </footer>
    </>
  );
};

export default Layout;
