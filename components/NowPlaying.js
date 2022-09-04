import React from 'react'
import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa'

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  if(!data?.isPlaying) {
    return <></>
  }

  return (
    <div> 
      <div className="flex sm:hidden justify-center pt-4 ">
          <a href={data?.songUrl} className="blend opacity-50 text-sm">{data?.title.toLowerCase()} \\ {data?.artist.toLowerCase()}</a>
      </div>
      <div className="flex sm:hidden justify-center pt-4 opacity-50 ">
        <FaSpotify />
      </div>
    </div>
  )
}
