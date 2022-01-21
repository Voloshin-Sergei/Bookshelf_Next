import { FC } from 'react';
import { Heading } from '../Heading';
import { Rating } from '../Rating';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { PencilIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/solid';

interface BookItemProps {
  id: number;
  cover: string;
  title: string;
  author: string;
  year: number;
  description: string;
  rating: number;
  tags: string[];
}

export const BookItem: FC<BookItemProps> = ({
  id,
  cover,
  title,
  author,
  year,
  description,
  rating,
  tags,
}) => {
  const tagsElement = (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag text={tag} />
        </li>
      ))}
    </ul>
  );
  return (
    <div key={id} className="grid grid-rows-auto rounded border border-lighter gap-2 m-2 p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <img width="200" src={cover} />
        </div>
        <div className="grid auto-rows-max col-span-3 gap-2">
          <span className="text-lighter text-lg">{author}</span>
          <div>
            <Heading tag="h2" text={title} color="text-dark" />
          </div>
          <span className="text-lighter">{year}</span>
          <p className="text-lg">{description}</p>
          {tagsElement}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Rating rate={rating} />
        <Button color="bg-info" text="Edit" icon={<PencilIcon />} />
        <Button color="bg-error" text="Delete" icon={<TrashIcon />} />
      </div>
    </div>
  );
};
