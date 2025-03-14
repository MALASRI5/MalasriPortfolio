import React from 'react';
import './projects.css';
import InstaImage from "./image/insta.png";
import AppleClone from './image/apple clone.png';
// import AspireHub from './image/aspireHub.png';
// import BlinkBazaar from './image/blinkbazaar.png';
// import BlogWebsite from './image/blogWebsite.png';
// import KeysToPicture from './image/keysToPicture.png';
import Todo from './image/toDo.png';
import Errorpg from './image/errorPage.png';
import EmailAlert from './image/emailAlert.png';

const Projects = () => {
    return (
        <section id='projects' className='pro-sect'>
            <h2>My Projects</h2>
            <div className='pro-con'>
                <div className='pro'>
                    <h3>Instagram Clone</h3>
                    <img src={InstaImage} alt='Instagram Clone' className='Pro-img' />
                    <p>Recreated the Instagram login and sign-up pages using HTML, CSS, Bootstrap, and JavaScript. This fully responsive design mirrors Instagram’s clean interface, emphasizing UI/UX design and front-end development skills.</p>
                    <a href='https://remarkable-conkies-202df9.netlify.app/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>Apple Website Clone</h3>
                    <img src={AppleClone} alt='Apple Clone' className='Pro-img' />
                    <p>Developed a clone of the Apple website using HTML, CSS, and JavaScript. The project replicates Apple’s sleek, modern design with interactive elements and responsive layouts, demonstrating expertise in UI/UX principles.</p>
                    <a href='https://malasri32.github.io/appleClone/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>AspireHub - Career Portal</h3>
                    <img src={InstaImage} alt='AspireHub' className='Pro-img' />
                    <p>A career guidance platform designed to help students explore career paths, internships, skill-building programs, and mentorship opportunities.</p>
                    <a href='https://malasri32.github.io/aspireHub/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>BlinkBazaar - E-commerce Website</h3>
                    <img src={InstaImage} alt='BlinkBazaar' className='Pro-img' />
                    <p>A full-fledged e-commerce platform focused on the fastest delivery. Features include user authentication, a product catalog, an intuitive shopping experience, and a preferred delivery date option.</p>
                    <a href='https://malasri32.github.io/blinkBazaar/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>Blog Website</h3>
                    <img src={InstaImage} alt='Blog Website' className='Pro-img' />
                    <p>A fully responsive blog website where users can explore and read various articles on technology, lifestyle, and other topics.</p>
                    <a href='https://malasri32.github.io/blogWebsite/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>Keys to Picture - Photography Website</h3>
                    <img src={InstaImage} alt='InstaImage' className='Pro-img' />
                    <p>A photography-based website featuring a search functionality that helps users discover high-quality images.</p>
                    <a href='https://malasri32.github.io/keysToPicture/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>To-Do List Application</h3>
                    <img src={Todo} alt='To-Do List' className='Pro-img' />
                    <p>A simple yet efficient to-do list application built using HTML, CSS, and JavaScript. Allows users to add, remove, and mark tasks as completed with an intuitive and responsive UI.</p>
                    <a href='https://malasri32.github.io/to-doList/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>Error Handling Page</h3>
                    <img src={Errorpg} alt='Error Page' className='Pro-img' />
                    <p>A single-page error handling webpage that efficiently communicates error messages using HTML, CSS, and Bootstrap.</p>
                    <a href='https://malasri32.github.io/errorPage/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>

                <div className='pro'>
                    <h3>Email Alert Page</h3>
                    <img src={EmailAlert} alt='Email Alert' className='Pro-img' />
                    <p>A responsive email verification alert page built using HTML, CSS, and Bootstrap. Designed for a seamless user experience with smooth UI interactions.</p>
                    <a href='https://malasri32.github.io/mailAlert/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>
                <div className='pro'>
                    <h3>ROCK PAPER SCISSOR</h3>
                    <img src={EmailAlert} alt='Email Alert' className='Pro-img' />
                    <p>A responsive email verification alert page built using HTML, CSS, and Bootstrap. Designed for a seamless user experience with smooth UI interactions.</p>
                    <a href='https://malasri32.github.io/mailAlert/' target='_blank' rel='noopener noreferrer'><button className='btn'>Explore</button></a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
