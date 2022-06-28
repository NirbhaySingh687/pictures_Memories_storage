import React from "react"
import { useSelector} from "react-redux";

function SecondChild(){
    const values = useSelector(state => state)

    console.log(`@@@@@@@@`,values)
    return(
        <div>
            SecondChild
        </div>
    )
}

export default SecondChild