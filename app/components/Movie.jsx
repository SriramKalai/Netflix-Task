import React from 'react';

const Movie = ({ src }) => {
  return (
    <div class='w-[160px] md:w-[220px] inline-block cursor-pointer py-2 px-1'>
      <img
        class='w-full h-auto block'
        src={src}
        alt="Movie Title"
      />
    </div>
  );
};

export default Movie;