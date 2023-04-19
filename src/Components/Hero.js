import { useRef } from 'react'
import './Hero.scss'

export default function Hero(props) {
    const nav1 = props.sectionNav.section1
    const nav2 = props.sectionNav.section2
    const nav3 = props.sectionNav.section3
    
    function goToSection(ref) {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div>
                <h1 className="hero-name">Jeremy Johnson</h1>
                <h3 className="hero-subtitle">Front End Developer</h3>
            </div>
            <div className='Hero-nav-buttons'>
                <ul className='hero-ul'>
                    <li><a onClick={() => {goToSection(nav1)}}>About</a></li>
                    <li><a onClick={() => {goToSection(nav2)}}>Projects</a></li>
                    <li><a onClick={() => {goToSection(nav3)}}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}