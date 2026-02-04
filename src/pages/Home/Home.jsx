import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import AboutSection from './AboutSection'
import MissionSection from './MissionSection'
import ServicesSection from './ServicesSection'
import SkillSection from './SkillSection'
import TeamSection from './TeamSection'
import Footer from '../Footer'
// import HeroText from './HeroText'

function Home() {
    return (
        <>
            {/* <Navbar />/ */}
            <Hero />
            <AboutSection />
            <MissionSection />
            <ServicesSection />
            <SkillSection />
            <TeamSection/>
            {/* <Footer /> */}
        </>
    )
}

export default Home