import './Skills.scss'

export default function Skills(props) {
    /* be sure to add function that allows placement of images */
    
    return(        
        <div className='skills-container'>
            <img className="skills-img" src={props.image} alt={props.name}></img>
            <p className="skills-text">{props.name}</p>
        </div>
    )
}