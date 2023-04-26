import {useRef} from 'react'
import './NavBar.scss';

export default function NavBar(props) {
    const nav1 = props.sectionNav.section1
    const nav2 = props.sectionNav.section2
    const nav3 = props.sectionNav.section3
    const nav4 = useRef(null)
    
    
    function goToSection(ref) {
        window.scrollTo({
            top: ref.current.offsetTop - 180,
            behavior: 'smooth'
        })  
    }

    return (
            <div className={`nav fixed`} ref={nav4}>
                <ul className="nav-items" onClick={() => {}}>
                    <li><button  onClick={() => {goToSection(nav1)}}>About</button></li>
                    <li><button  onClick={() => {goToSection(nav2)}}>Projects</button></li>
                    <li><button  onClick={() => {goToSection(nav3)}}>Contact</button></li>
                </ul>
            </div>
    )
}  