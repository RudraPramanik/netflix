import Image from 'next/image'
import { Movie } from '../typing'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../constants/movie'

interface props {
  netflixOriginals: Movie[]
}
const Banner = ({ netflixOriginals }: props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  console.log(movie)

  return(
      <div>
           <Image
           src={`${BASE_URL} ${movie?.backdrop_path || movie?.poster_path}` 
           layout="fill"
           />
      </div>
 
  )
}

export default Banner
