import { FC } from 'react';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3';
  text: string;
  color: string;
}

export const Heading: FC<HeadingProps> = ({ tag, text, color }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={`${color} text-4xl font-bold `}>{text}</h1>;
    case 'h2':
      return <h2 className={`${color} text-3xl font-bold `}>{text}</h2>;
    case 'h3':
      return <h3 className={`${color} text-2xl font-bold `}>{text}</h3>;
    default:
      return <></>;
  }
};
