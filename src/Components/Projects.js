import ProjectItem from "./ProjectItem"
import ProjectItemReverse from "./ProjectItemReverse"

export default function Projects(props) {

    const image1 = ".//DrawingPad.png"
    const image2 = './/DateNightRandomizer.png'
    const image3 = './/CoffeeCoffee.png'

    const boxShadowClass1 = "project-img img1"
    const boxShadowClass2 = 'project-img img2'
    const boxShadowClass3 = 'project-img img3'

    const title1 = "Drawing Pad Website"
    const title2 = "Date Night Randomizer!"
    const title3 = "Coffee Coffee"
    
    const description = "a simple drawing tool to make and save fun and interesting creations." 
                        + " You can use and adjust the lightness and saturation of multiple colors" 
                        + ", pick colors back up from the canvas, and save your final work locally."
    
    const description2 = "The Date night randomizer gives you random ideas for dates. Simply select from the filter list and hit randomize" +
    ". It is also possible to add in your own ideas to further customize the ideas it outputs."

    const description3 = "Coffee Coffee is a mock coffee website built to practice web design. It includes a simple cart and checkout page."
    

    return (
        <div>
            <h2 ref={props.sectionNav.section2}>Projects</h2>
            <div>
                <ProjectItem 
                    boxshd={boxShadowClass1} 
                    image={image1} 
                    title={title1} 
                    description={description} 
                    github="https://github.com/Th0ughtTrain/Sketchpad-Website"
                    site="https://th0ughttrain.github.io/Sketchpad-Website/"  
                    alt="screenshot of drawing website"
                />
                <ProjectItemReverse 
                    boxshd={boxShadowClass2} 
                    image={image2} 
                    title={title2} 
                    description={description2} 
                    github="https://github.com/Th0ughtTrain/date-night-randomizer"
                    site="https://th0ughttrain.github.io/Coffee-Coffee-Website/"
                    alt="screenshot of date night randomizer"
                />
                <ProjectItem 
                    boxshd={boxShadowClass3} 
                    image={image3} 
                    title={title3} 
                    description={description3} 
                    github="https://github.com/Th0ughtTrain/Coffee-Coffee-Website" 
                    site="https://th0ughttrain.github.io/date-night-randomizer/"
                    alt= "screenshot of Coffee Coffee website"
                />
            </div>
        </div>
    )
}