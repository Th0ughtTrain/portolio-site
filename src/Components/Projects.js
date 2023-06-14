import ProjectItem from "./ProjectItem"
import ProjectItemReverse from "./ProjectItemReverse"

export default function Projects(props) {

    const image1 = ".//DrawingPad.png"
    const image2 = './/DateNightRandomizer.png'
    const image3 = './/CoffeeCoffee.png'
    const image4 = ".//randommathgen.png"

    const boxShadowClass1 = "project-img img1"
    const boxShadowClass2 = 'project-img img2'
    const boxShadowClass3 = 'project-img img3'
    const boxShadowClass4 = 'project-img img4'
    
    const title1 = "Drawing Pad Website"
    const title2 = "Date Night Randomizer!"
    const title3 = "Coffee Coffee"
    const title4 = "Randommathgen.com"
    
    const description = "a simple drawing tool to make and save fun and interesting creations." 
                        + " You can use and adjust the lightness and saturation of multiple colors" 
                        + ", pick colors back up from the canvas, and save your final work locally."
    
    const description2 = "The Date night randomizer gives you random ideas for dates. Simply select from the filter list and hit randomize" +
    ". It is also possible to add in your own ideas to further customize the ideas it outputs."

    const description3 = "Coffee Coffee is a mock coffee website built to practice web design. It includes a simple cart and checkout page."

    const description4 = "A website that generators multiplication problems and tracks how many questions you've gotten right or wrong" +
     "includes a functional backend user profile system, with more features planned. " 
     + "built with vanilla Javascript and JQuery on front end and MongoDB, Express, Node, and Passport on the backend"
    

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
                    site="https://th0ughttrain.github.io/date-night-randomizer/"
                    alt="screenshot of date night randomizer"
                />
                <ProjectItem 
                    boxshd={boxShadowClass3} 
                    image={image3} 
                    title={title3} 
                    description={description3} 
                    github="https://github.com/Th0ughtTrain/Coffee-Coffee-Website" 
                    site="https://th0ughttrain.github.io/Coffee-Coffee-Website/"
                    alt= "screenshot of Coffee Coffee front page"
                />
                <ProjectItemReverse 
                    boxshd={boxShadowClass4} 
                    image={image4} 
                    title={title4} 
                    description={description4} 
                    github=""
                    site="https://randommathgen.com/"
                    alt="screenshot of random math generator"
                />
            </div>
        </div>
    )
}