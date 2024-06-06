'use client'
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface MovieProps {
  src: string;
  id: number;
  rowId: number;
}

const Movie: React.FC<MovieProps> = ({ src, id, rowId }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hover, setHover] = useState(false);

  const saveShow = async () => {
    setLike(!like);
    setSaved(true);
  };

  return (
    <a
      className='movie-container w-[160px] md:w-[220px] inline-block cursor-pointer py-2 px-1'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className='w-full h-auto block'
        src={src}
        alt="Movie Title"
      />
      {hover && (
        <div className="h-16 pt-1 bg-black gap-4 items-start" id={'movie' + id + rowId}>
          <div className="flex justify-between w-full px-3">
            <div className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              <p onClick={saveShow}>
                {like ? (
                  <FaHeart className='text-gray-300' />
                ) : (
                  <FaRegHeart className='text-gray-300' />
                )}
              </p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </a>
  );
};

export default Movie;
