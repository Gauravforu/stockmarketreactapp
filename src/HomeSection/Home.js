import React from 'react'
import { Tophead } from '../HeadSection/Tophead'
import { Navbar } from '../Navbar/Navbar'
import { Slidersection } from '../Slider/Slidersection'
import { Marquee } from '../Slider/Marquee'
import { About } from '../AboutSection/About'
import { Why } from '../HeadSection/Body/whysection/Why'
import { Who } from '../HeadSection/Body/whysection/Who'
import { What } from '../HeadSection/Body/whysection/What'
import { Work } from '../HeadSection/Body/Worksection/Work'
import { TrustSlider } from '../Slider/TrustSlider'
import { Contact } from '../AboutSection/ContactSection/Contact'
import { Risk } from '../FooterSection/Risk'
import { Footer } from '../FooterSection/Footer'

export const Home = () =>  {
  return (
    <div>
        <Tophead/>
        <Navbar/>
        <Slidersection/>
        <Marquee/>
        <About cName="about"/>
        <Why/>
        <Who/>
        <What/>
        <Work  cName="work"/>
        <TrustSlider cName="mainslider"/>
        <Contact cName="mainclass"/>
        <Risk cName="mainrisk"/>
        <Footer cName="mainfooter"/>
    </div>
  )
}
