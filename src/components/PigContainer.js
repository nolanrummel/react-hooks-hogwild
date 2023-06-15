import Hog from "./Hog.js"

function PigContainer({hogs}){
    const displayHog = 
        hogs.map(hog => {
        return <Hog hog={hog} key={hog.name}/>
    })
    // console.log(hogs)
    return (
        <div className="ui grid container">
            {displayHog}
        </div>
    )
}

export default PigContainer;