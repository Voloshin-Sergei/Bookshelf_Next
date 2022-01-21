import { FC } from 'react';
import { BookItem } from '../BookItem';
import { BookItemProps } from '../BookItem/BookItem';

interface BooksListProps {
  books: BookItemProps[];
}

export const BooksList: FC<BooksListProps> = ({ books }) => {
  return (
    <div className="container mx-auto py-6 px-2 max-w-3xl">
      {books.map(({ id, cover, title, author, year, description, rating, tags }) => (
        <BookItem
          id={id}
          cover={cover}
          title={title}
          author={author}
          year={year}
          description={description}
          rating={rating}
          tags={tags}
        />
      ))}
    </div>
  );
};
