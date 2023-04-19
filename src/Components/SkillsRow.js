import './SkillsRow.scss'
import Skills from './Skills'

export default function SkillsRow() {
    return (
        <div>
            <div className='skill-row'>
                <Skills />
                <Skills />
                <Skills />
                <Skills />
            </div>
            <div className='skill-row'>
                <Skills />
                <Skills />
                <Skills />
                <Skills />
            </div>
            <div className='skill-row'>
                <Skills />
                <Skills />
            </div>
        </div>

    )
}