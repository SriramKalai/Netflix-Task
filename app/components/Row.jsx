import Movie from './Movie';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, images, rowID }) => {

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 class='text-white font-bold md:text-xl pt-12  pb-1'>{title}</h2>
      <div class='relative flex items-center group'>
        {/* <MdChevronLeft
          onClick={slideLeft}
          class='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        /> */}
        <div
          id={'slider' + rowID}
          class='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth hide-scrollbar relative'
        >
          {images.map((image) => (
            <Movie src={image} />
          ))}
        </div>
        {/* <MdChevronRight
          onClick={slideRight}
          class='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        /> */}
      </div>
    </>
  );
};

export default Row;