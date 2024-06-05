import React from 'react'

const Banner = () => {
  return (
    <div class='w-full h-[600px] text-white'>
      <div class='w-full h-full'>
        <div class='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          class='w-full h-full object-cover'
          src={`https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABejLQtKy27V6B15De9BVYZKiFspn7muPCXXOJGAB4pDnvIau5BaISJ9Njx2127xa0FU1nyWMCLLojxscnYrtZ-6ffM8q6kRhVueU.webp?r=4e3`}
        />
        <div class='absolute w-full bottom-[40%] py-4 px-[4%]'>
          <h1 class='text-3xl md:text-5xl font-bold'>Movie Title</h1>
          <div class='my-4 flex'>
            <button class='flex gap-3 border bg-white text-black font-bold border-gray-300 h-11 items-center px-5 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="PlayStandard" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
              <span class="text-xl font-semibold">Play</span>
            </button>
            <button class='flex gap-3 text-xl border text-white border-gray-300 h-11 items-center px-5 ml-4 bg-[#6d6d6eb3]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="CircleIStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
              <span class="text-xl font-semibold">More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner