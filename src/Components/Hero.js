
import './Hero.scss'

export default function Hero(props) {
    const nav1 = props.sectionNav.section1
    const nav2 = props.sectionNav.section2
    const nav3 = props.sectionNav.section3
    // const nav4 = props.sectionNav.navSection
    
    function goToSection(ref) {
        window.scrollTo({
            top: ref.current.offsetTop - 180,
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
                    <li><button className='large-btn1'  onClick={() => {goToSection(nav1)}}>About</button></li>
                    <li><button className='large-btn2' onClick={() => {goToSection(nav2)}}>Projects</button></li>
                    <li><button className='large-btn3' onClick={() => {goToSection(nav3)}}>Contact</button></li>
                </ul>
            </div>
        </div>
    )
}