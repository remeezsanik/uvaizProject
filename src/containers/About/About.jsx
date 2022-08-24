import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'

const abouts = [
    { title: 'Frontend Development', imageUrl: images.about01 }
]
const About = () => {

    return (
        <div className='about'>
            <h2 className="head-text">My <span>Interest's</span> <br /></h2>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item">
                        <img src={about.imageUrl} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default About