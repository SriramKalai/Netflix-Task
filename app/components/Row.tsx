'use client'
import Swiper from 'swiper';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Pagination } from 'swiper/modules';

interface RowProps {
  title: string;
  images: string[];
  rowID: string;
}

const Row: React.FC<RowProps> = ({ title, images, rowID }) => {

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft += 500;
    }
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl pt-12  pb-1 z-10'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className="hidden group-hover:block left-0 absolute cursor-pointer z-10"
          size={70}
        />
        <div
          id={'slider' + rowID}
          className='movie-container w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth hide-scrollbar relative'
        >
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            classNameName="mySwiper"
          > */}
          {images.map((image) => (
            <Movie src={image} />
          ))}
          {/* </Swiper> */}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="hidden group-hover:block right-0 absolute cursor-pointer z-10"
          size={70}
        />
      </div>
    </>
  );
};

export default Row;