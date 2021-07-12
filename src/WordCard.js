import React, { useState } from 'react'
import _ from 'lodash';
import CharacterCard from './CharacterCard'
import HintCard from './HintCard';

const prepareStateFromWorld = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        complete: false,
        hint: '',
    }

}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWorld(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({ ...state, guess })

        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('yeah!')
                setState({ ...state, complete: true })
            } else {
                console.log('reset,next attempt')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
        console.log(HintCard.hintGuess)
    }

    const activeHint = d => {
        setState({ ...state, guess: state.guess + d })
        console.log('d == ' + state.guess)
    }

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
            }
            <div>
                <HintCard value='Hint' activeHint={activeHint} prepareStateFromWorld={state} />
            </div>
        </div>
    )
}