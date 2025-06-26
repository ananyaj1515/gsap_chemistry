import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
    return (
      <div>
        <h1 className='text-3xl text-indigo-500 flex-center h-[100vh]'>Hello GSAP</h1>
      </div>
    )
}

export default App;