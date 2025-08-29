import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import { Link } from 'react-router'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odio delectus, aliquam doloremque perspiciatis ut ex dicta assumenda ullam sit enim laudantium hic quas dolore. Ut dolorum odit quibusdam rem temporibus impedit fugit natus, numquam omnis autem adipisci repellat, porro provident cupiditate animi atque illum ipsum accusamus perferendis! Error, neque.
                </p>
                <Link to={"/"}>
                    Eplore Menu{" "}
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About