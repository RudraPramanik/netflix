import React from 'react'
import { Movie } from '../typing'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Thumbnail from './Thumbnail'

interface props {
  title: string
  movies: Movie[]
}
const Row = ({ title, movies }) => {
  return (
    <div>
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 `}
          //   onClick={() => handleClick('left')}
        />
        <div
          className="scrollbar-hide flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
          //   ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export default Row
