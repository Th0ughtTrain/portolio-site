import ProjectItem from "./ProjectItem"
import ProjectItemReverse from "./ProjectItemReverse"

export default function Projects(props) {

    console.log(props.sectionNav)

    return (
        <div>
            <h2 ref={props.sectionNav.section2}>Projects</h2>
            <div>
                <ProjectItem />
                <ProjectItemReverse />
                <ProjectItem />
            </div>
        </div>
    )
}