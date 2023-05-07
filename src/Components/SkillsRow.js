import './SkillsRow.scss'
import Skills from './Skills'

export default function SkillsRow() {
    const image1 = ".//Html5.png";
    const image2 = './/CSS3.png';
    const image3 = './/Javascript.png';
    const image4 = './/ReactNative.png'
    const image5 = './/Sass.png';
    const image6 = './/Jquery.png';
    const image7 = './/Git.png';
    const image8 = './/github-mark-white.png';
    const image9 = './/Lunacy.png';
    const image10 = './/AdobePhotoshop.png';

    const name1 = 'HTML'
    const name2 = "CSS"
    const name3 = "Javascript"
    const name4 = `React`
    const name5 = 'Sass'
    const name6 = 'Jquery'
    const name7 = 'Git'
    const name8 = 'Github'
    const name9 = 'Lunacy'
    const name10 = 'Photoshop'
    

    return (
        <div>
            <div className='skill-row-wrapper'>
                <div className='skill-row'>
                    <Skills image={image1} name={name1} />
                    <Skills image={image2} name={name2} />
                    <Skills image={image3} name={name3} />
                    <Skills image={image4} name={name4} />
                </div>
                <div className='skill-row'>
                    <Skills image={image5} name={name5} />
                    <Skills image={image6} name={name6} />
                    <Skills image={image7} name={name7} />
                    <Skills image={image8} name={name8} />
                </div>
                <div className='skill-row'>
                    <Skills image={image9} name={name9} />
                    <Skills image={image10} name={name10} />
                </div>
            </div>
        </div>

    )
}