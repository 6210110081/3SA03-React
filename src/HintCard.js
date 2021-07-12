import React, { useState ,useRef ,useEffect } from 'react'
import _ from 'lodash'

export default function HintCard(props) {
    const hint ='Hint'
    const [active, setActive] = useState(false);
    let numHint = 1;
    const numHintRef = useRef(numHint);

    const activate = () => {
        if (!active) {
            numHintRef.current = 0;
            setActive(true)
            let lengGuess = props.prepareStateFromWorld.guess.length;
            let wordGuess = props.prepareStateFromWorld.word;
            props.prepareStateFromWorld.guess = props.prepareStateFromWorld.guess + wordGuess[lengGuess]
            console.log(props.prepareStateFromWorld.guess)

            props.activeHint(wordGuess[lengGuess])
        }
    }

    useEffect(() => {
        if (numHintRef.current != props.attempt) {
            numHintRef.current = props.attempt
        }
    })

    const className = `hintCard ${active ? 'activehintCard' : ''}`
    return <div className={className} onClick={activate} >
        {hint + '  ' + numHintRef.current}
    </div>

}