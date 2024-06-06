import React from 'react';

interface MovieProps {
  src: string;
}

const Movie: React.FC<MovieProps> = ({ src }) => {
  return (
    <a className='w-[160px] md:w-[220px] inline-block cursor-pointer py-2 px-1'>
      <img
        className='w-full h-auto block'
        src={src}
        alt="Movie Title"
      />
    </a>
  );
};

export default Movie;
