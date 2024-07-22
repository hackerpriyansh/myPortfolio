import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import figma from '../assets/images/figma.svg'
import wordpress from '../assets/images/wordpress.svg'
import webflow from '../assets/images/webflow.svg'
import notion from '../assets/images/notion.svg'
import elementor from '../assets/images/elementor.svg'
import react from '../assets/images/react.svg'
import mysql from '../assets/images/mysql.svg'
import canva from '../assets/images/canva.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Tools = ({ isMobile }) => {

    const settings = {
        dots: false,
        infinite: true,

        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const tools = [
        {
            logo: figma,
            name: 'Figma',
        },
        {
            logo: webflow,
            name: '',
        },
        {
            logo: wordpress,
            name: 'WordPress',
        },
        {
            logo: canva,
            name: '',
        },
        {
            logo: mysql,
            name: '',
        },
        {
            logo: react,
            name: 'ReactJs',
        },
        {
            logo: notion,
            name: 'Notion',
        },
        {
            logo: elementor,
            name: '',
        },
    ]

    const [items, setItems] = useState(tools.slice(0, 1)); // Initial state with first 4 items

    // Function to append new items and handle infinite scroll
    const handleScroll = () => {
        // Clone the current items array
        const clonedItems = [...items];
        // Move the first item to the end of the array
        const firstItem = clonedItems.shift();
        clonedItems.push(firstItem);
        // Update the state with the new array
        setItems(clonedItems);
    };

    // Use useEffect to simulate the animation effect and handle scrolling
    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll();
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [items]); // Re-run effect when items change



    return (
        <section className='toolSection' id="tools">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col leftSection"  style={{background: 'linear-gradient(to right, black 50%, #fed43a 50%)' }}>
                        <h1 className="h1-header-filled" style={{ marginTop: '100px', marginBottom: '100px' }}>Tech I Use</h1>
                        <div className="halfcontainer ">
                            <div className="toolsWrapper">
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        {tools.map((tool, index) => (
                                            <div className="toolContainer" key={index}>
                                                <div className="d-flex justify-content-around align-items-center" style={{height:'25%'}}>
                                                <img src={tool.logo} width={`${tool.name? '25%' : '100%'}`} alt={tool.name} />
                                                <h4 className='m-0 tool-name'>{tool.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
