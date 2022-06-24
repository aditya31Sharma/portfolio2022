import React from 'react'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import GlanceAtWork from './sections/GlanceAtWork'
const Home = () => {
    return (
        <div className="home-container">
        <Hero/>
        <Skills/>
        <GlanceAtWork/>
        </div>
    );
}
export default Home