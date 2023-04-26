import {useState} from 'react'
import './ProjectItem.scss'

export default function ProjectItemReverse(props) {

    
    
    return (
        <div>
            <div className='project-container'>
                <div className='project-description reverse'>
                    <h2>{props.title}</h2>
                    <p className='project-text'>{props.description}</p>
                    <div className='btn-row'>    
                        <a className='btn' href={props.github}>Github</a>
                        <a className='btn' href={props.site}>Site</a>
                    </div>
                </div>
                <img className={props.boxshd} src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}