import Link from 'next/link'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            home
          </li>
          <li className="headerLink">tv shows</li>
          <li className="headerLink">Movies</li>
          <li className="headarLink"> New & popular </li>
          <li className="headarLink"> My List</li>
        </ul>
        <div className="flex items-center space-x-4 text-sm font-light">
          <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className="h-6 w-6" />
          <Link href="/account">
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
