import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
