import React from 'react'
import useSWR from 'swr';

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  if(!data?.isPlaying) {
    return <></>
  }

  return (
    <div className="flex sm:hidden justify-center pt-4">
        <a href={data?.songUrl} className="blend opacity-50 text-sm">{data?.title} \\ {data?.artist}</a>
    </div>
  )
}
