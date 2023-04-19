import { useEffect } from 'react';
import './NavBar.scss';

export default function NavBar(props) {
    const nav1 = props.sectionNav.section1
    const nav2 = props.sectionNav.section2
    const nav3 = props.sectionNav.section3

    console.log (nav1)
    
    function goToSection(ref) {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
            <div className="nav">
                <ul className="nav-items">
                    <li><a onClick={() => {goToSection(nav1)}}>About</a></li>
                    <li><a onClick={() => {goToSection(nav2)}}>Projects</a></li>
                    <li><a onClick={() => {goToSection(nav3)}}>Contact</a></li>
                </ul>
            </div>
    )
}