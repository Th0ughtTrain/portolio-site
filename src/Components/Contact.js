import './Contact.scss'
export default function Contact(props) {
    return (
        <div className="contact-wrapper">
            <h4 className="contact-title" ref={props.sectionNav.section3}>Contact</h4>
            <p className='contact-p'>To get in touch with me contact me at: Jjout14@gmail.com</p>
            <h4>Or at these places!</h4>
            <div className='socials'>
                <span>
                    <a href='https://github.com/Th0ughtTrain'><img className='github' src=".//github-mark-white.png" alt="link to github profile"/></a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/jeremy-johnson-1ab32966/"><img className='linked-in' src=".//In-White-128.png" alt="link to linked-in profile"/></a>
                </span>
            </div>
            <div className='contact-resume-wrap'>
               <a className='contact-resume' href='.//Jeremy Johnson Resume.pdf'>Resume</a> 
            </div>
        </div>
    )
}