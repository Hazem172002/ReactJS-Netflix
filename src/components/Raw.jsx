import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
function Raw({title,fetchURL,rowID}) {
    const [movies,setMovies]=useState([])
    const [like,setLike]=useState(false)
    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    const slideLeft=()=>{
        var slider=document.getElementById('slider'+rowID);
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const slideRight=()=>{
        var slider=document.getElementById('slider'+rowID);
        slider.scrollLeft=slider.scrollLeft+500;
    }

  return (
    <>
    <h2 className='text-white md:text-xl font-bold p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 opacity-50 hover:opacity-100 absolute rounded-full cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,id)=>(
                <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full rounded-md h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm  flex font-bold justify-center items-center h-full text-center'>{item?.title}</p>
                        <p>{like?<FaHeart className='top-4 text-gray-300 left-4 absolute'/> :<FaRegHeart className='top-4 text-gray-300 left-4 absolute'/>}</p>
                    </div>
                </div>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 opacity-50 hover:opacity-100 absolute rounded-full cursor-pointer z-10 hidden group-hover:block'/>
    </div>
    </>
  )
}

export default Raw