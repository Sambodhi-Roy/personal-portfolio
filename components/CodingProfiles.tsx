import React from 'react'
import { HoverImageLinks } from './ui/HoverImageLinks'

const CodingProfiles = () => {
  return (
    <div id='profiles' className='pb-20'>
        <h1 className="heading pb-8">
            My 
            <span className="text-purple"> Coding Profiles</span> 
        </h1>
        <HoverImageLinks/>
    </div>
  )
}

export default CodingProfiles