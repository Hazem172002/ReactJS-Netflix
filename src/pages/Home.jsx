import React from 'react'
import Main from '../components/Main'
import Raw from '../components/Raw'
import requests from '../Request'
function Home() {
  return (
    <>
        <Main />
        <Raw rowID='1' title='Up Coming' fetchURL={requests.upComing}/>
        <Raw rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Raw rowID='3' title='Top Rated' fetchURL={requests.topRated}/>
        <Raw rowID='4' title='Trending' fetchURL={requests.trending}/>
    </>
  )
}

export default Home