import './Contact.scss'
export default function Contact(props) {
    return (
        <div className="contact-wrapper">
            <h4 className="contact-title" ref={props.sectionNav.section3}>Contact</h4>
            <p className='contact-p'>To get in touch with me contact me at: Jjout14@gmail.com</p>
            <div className='contact-resume-wrap'>
               <a className='contact-resume' href='.//Jeremy Johnson Resume.pdf'>Resume</a> 
            </div>
        </div>
    )
}