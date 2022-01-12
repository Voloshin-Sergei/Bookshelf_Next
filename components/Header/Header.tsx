import { FC } from 'react';
import { Heading } from '../Heading';

interface HeaderProps {
  text: string;
  color: string;
}

export const Header: FC<HeaderProps> = ({ text, color }) => {
  return (
    <header className="bg-secondary-dark">
      <div className="container mx-auto py-6 px-2 max-w-3xl">
        <Heading tag="h2" text={text} color={color} />
      </div>
    </header>
  );
};
