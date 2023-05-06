import './About.scss'
import SkillsRow from './SkillsRow'

export default function About(props) {
    return (
        <div>
            <h2 ref={props.sectionNav.section1}>About</h2>
            <p className='about-p'>
                Hi, I'm a front-end developer who is looking to create great web applications and user experiences. With a background in education, art, and fitness coaching, I've always centered my thinking around the question "How can I ensure that this experience is valuable?"
            </p>
            <p className='about-p'>
                When I'm not coding my own projects, I'm learning with various code groups like Codecademy, working on other creative endeavors outside of coding, or coaching. Check out a few of my projects below!
            </p >
            <p className='about-p'>
            I'm interested in collaborating with other enthusiastic developers to build meaningful web experiences. If that sounds like something you're looking for, feel free to reach out.
            </p>
            <div>
                <h2>Skills</h2>
                <div>
                    <SkillsRow/>
                </div>
            </div>
        </div>
    )
}