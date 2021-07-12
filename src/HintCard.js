import React, { useState ,useRef ,useEffect } from 'react'
import _ from 'lodash'

export default function HintCard(props) {
    const hint ='Hint'
    const [active, setActive] = useState(false);
    let numHint = 1;
    const numHintRef = useRef(numHint);

    console.log(props.value)

    const activate = () => {
        if (!active) {
            numHintRef.current = 0;
            setActive(true)
            console.log(props.informationWord.guess)
            console.log(props.informationWord.word)
        }
    }

    const className = `hintCard ${active ? 'activehintCard' : ''}`
    return <div className={className} onClick={activate} >
        {hint + '  ' + numHintRef.current}
    </div>

}