import React, { useState ,useRef ,useEffect } from 'react'
import _ from 'lodash'

export default function HintCard(props) {
    const [active, setActive] = useState(false);
    let numHint = 1;
    const numHintRef = useRef(numHint);

    const activate = () => {
        if (!active) {
            numHintRef.current = 0;
            setActive(true)
        }
    }

    const className = `hintCard ${active ? 'activehintCard' : ''}`
    return <div className={className} onClick={activate} >
        {props.value + '  ' + numHintRef.current}
    </div>

}