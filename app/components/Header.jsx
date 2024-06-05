import React from 'react'

const Menu = () => {
  const menus = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"]
  return (
    <div class="flex gap-6 items-center">
      <button class="lg:hidden">
        <img src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif" class="w-6 h-6" />
      </button>
      <div class="h-8"><Logo /></div>
      <ui class="text-sm list-none hidden lg:flex">
        {menus.map((menu, index) => (
          <li key={index} class={`header-list ${index === 0 ? 'ml-5 font-bold' : ''}`}>
            <a>{menu}</a>
          </li>
        ))}
      </ui>
    </div>
  )
}

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="31" viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26" /></svg>
  )
}

const SearchBar = () => {
  return (
    <div class="lg:hidden flex items-center  border-solid border-white">
      <input type="text" name="q" class="w-[130px] pl-4 text-white bg-black" placeholder="Search" data-placeholder="Search" />
    </div>
  )
}

const ExtendedMenu = () => {
  return (
    <div class="items-center gap-4 hidden lg:flex">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="MagnifyingGlassStandard" aria-hidden="true" class="search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
      </button>
      <a href='#'>
        children
      </a>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="BellStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>
      </button>
      <button class="flex">
        <img class="rounded-md" src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />
        <span class="ml-0 mt-1 hover:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z" /></svg></span>
      </button>
    </div>
  )
}

const Header = () => {
  return (
    <div class="flex px-[4%] h-[68px] items-center">
      <div class="flex justify-between w-full">
        <Menu />
        <ExtendedMenu />
        <SearchBar />
      </div>
    </div >
  )
}


export default Header