import { FC } from 'react';
import { LinkIcon } from '@heroicons/react/solid';

export const Footer: FC = () => {
  return (
    <footer className="bg-secondary-dark text-secondary">
      <div className="container mx-auto flex content-center justify-between py-6 px-2 max-w-3xl">
        <span className="text-lg">Next.JS application</span>
        <span className="text-xl">{new Date().getFullYear()}</span>
        <a href="https://github.com/Voloshin-Sergei">
          <LinkIcon className="inline w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};
