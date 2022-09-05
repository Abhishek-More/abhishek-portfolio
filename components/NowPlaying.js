import React from 'react'
import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa'

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher, { refreshInterval: 1000 });

  if(!data?.isPlaying) {
    return <></>
  }

  return (
    <div> 
      <div className="flex sm:hidden justify-center pt-4">
          <a href={data?.songUrl} className="blend opacity-50 text-sm">{data?.title.toLowerCase()} \\ {data?.artist.toLowerCase()}</a>
      </div>
      <div className="flex sm:hidden justify-center pt-4 ">
        <FaSpotify className="blend opacity-50" />
      </div>
    </div>
  )
}
