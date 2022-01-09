import { FC } from 'react';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3';
  text: string;
}

export const Heading: FC<HeadingProps> = ({ tag, text }) => {
  switch (tag) {
    case 'h1':
      return <h1 className="text-4xl font-bold">{text}</h1>;
    case 'h2':
      return <h2 className="text-3xl font-bold">{text}</h2>;
    case 'h3':
      return <h3 className="text-2xl font-bold">{text}</h3>;
    default:
      return <></>;
  }
};
