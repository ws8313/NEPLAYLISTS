import React from 'react'
import Lyrics from './Lyrics'
import Playlist from './Playlist'

export default function Home() {
  return (
    <div>
      <canvas width="150" height="150"></canvas>
      <Lyrics />
      <Playlist/>
    </div>
  )
}
