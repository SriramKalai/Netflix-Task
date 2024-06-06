import React from 'react';
import Row from './Row';

const shuffleArray = (array: string[]): string[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Main = ({ imageBank01 }: { imageBank01: string[] }) => {
  return (
    <div className="pl-[4%] mt-[-25%] lg:mt-[-12%] flex flex-col">
      <Row rowID='1' title='Top Searches' images={shuffleArray(imageBank01)} />
      <Row rowID='2' title='Telugu-Language Movies' images={shuffleArray(imageBank01)} />
      <Row rowID='3' title='Exciting Movies' images={shuffleArray(imageBank01)} />
      <Row rowID='4' title='Swoonworthy Romance' images={shuffleArray(imageBank01)} />
      <Row rowID='5' title='Critically Acclaimed TV Shows' images={shuffleArray(imageBank01)} />
      <Row rowID='6' title='New on Netflix' images={shuffleArray(imageBank01)} />
      <Row rowID='7' title='US TV Shows' images={shuffleArray(imageBank01)} />
    </div>
  );
};

export default Main;
