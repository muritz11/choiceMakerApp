import { useState } from "react";
import { Link } from "react-router-dom";

export default function Answer(props) {
    
    const [index, setIndex] = useState(0)

    function random(){
        setIndex(Math.floor(Math.random() * props.options.length))
    }

    const ans = props.options[index]

    return (
        <div className='ans'>
            <h2>{props.question}?</h2>
            <h3>You should: {ans}</h3>

            <button className='another-ans' onClick={() => random()}>Get another answer</button><br />

            <button className='another-ans'>
                <Link to='/'>Ask another question</Link>
            </button>

        </div>
    )
}