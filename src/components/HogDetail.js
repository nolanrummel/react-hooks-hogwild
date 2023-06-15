
function HogDetail({hog}){
    // console.log(hog.weight)
    return(
        <div>
            <li>{hog.weight}</li>
            <li>{hog.specialty}</li>
            <li>{hog.greased ? "True" : "False"}</li>
            <li>{hog['highest medal achieved']}</li>
        </div> 
    )
}

export default HogDetail