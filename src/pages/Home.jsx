import React from 'react'
import BottomMain from '../components/BottomMain'
import Herosection from '../components/Herosection'
import Inspiration from '../components/Inspiration'
import './home.css'

export default function Home() {
  return (
    <div className='homepage'>
     <Herosection/>
     <Inspiration/>
     <BottomMain/>
    </div>
  )
}
