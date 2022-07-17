import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Scrollcontent = ({ children }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div data-aos='fade-right'>{children}</div>

    )
}

export default Scrollcontent