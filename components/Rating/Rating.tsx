import { FC, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

interface RatingProps {
  rate: number;
}

export const Rating: FC<RatingProps> = ({ rate }) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(0);

  const handleRating = (index: number): void => {
    setRating(index);
  };

  const handleHover = (index: number): void => {
    setHover(index);
  };

  return (
    <div className="flex items-center py-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarIcon
            key={index}
            className={`w-6 h-6 hover:scale-125 ${
              index <= (hover || rating) ? 'text-rate' : 'text-light'
            } `}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(rating)}
          />
        );
      })}
    </div>
  );
};
