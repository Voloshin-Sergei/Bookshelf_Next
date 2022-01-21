import { FC } from 'react';

interface TagProps {
  text: string;
}

export const Tag: FC<TagProps> = ({ text }) => {
  return (
    <div className="inline-block bg-secondary text-lighter text-base py-0.2 px-2 border-solid border border-text-lighter rounded-full">
      {text}
    </div>
  );
};
