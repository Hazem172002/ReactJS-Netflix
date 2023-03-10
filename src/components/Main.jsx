
import axios from 'axios'
import React,{ useEffect,useState } from 'react'

import requests from '../Request'

function Main() {
    const [movies,setMovies]=useState([])
    const movie=movies[Math.floor(Math.random()*movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results);
        })
    },[])
    const truncateString=(str,num)=>{
        if(str?.length>num){
            return str.slice(0,num)+'...'
        }else{
            return str;
        }
    }
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
            <div className='absolute top-[20%] w-full p-4 md:p-8'>
                <h1 className='text-3xl md:4xl text-white'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='bg-gray-300 py-2 px-5 border border-gray-300 text-black'>Play</button>
                    <button className='border border-gray-300 text-white py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='text-gray-200 w-full md:w-[70%] lg:w-[50%] lg-w[35%]'>{truncateString(movie?.overview,200)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main