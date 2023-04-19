import './Contact.scss'
export default function Contact(props) {
    return (
        <div className="contact-wrapper">
            <h4 className="contact-title" ref={props.sectionNav.section3}>Contact</h4>
            <p className='contact-p'>To get in touch with me contact me at:</p>
            <div className='contact-resume-wrap'>
               <a className='contact-resume'>Resume</a> 
            </div>
        </div>
    )
}