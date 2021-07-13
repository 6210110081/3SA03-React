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
        checkword: true
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
        console.log('check guess = ' + guess)
    }

    const activeHint = d => {
        setState({ ...state, hint: d })
    }

    const checkWord = () => {
        for (let i = 0; i < state.guess.length; i++) {
            if (state.guess[i] != state.word[i]) {
                setState({ ...state, checkword: false })
            }
        }
    }

    const reset = () => {
        setState({ ...state, guess: '', attempt: state.attempt + 1, checkword: true, complete: false, hint: '' })
    }

    const showHint = state.checkword ? (state.hint == '' ? '' : 'Charecter next is ' + state.hint) : 'Please Click Reset'

    const showCongrats = state.complete ? 'Congrats  !!!' : ''

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activeHint={state.guess} activationHandler={activationHandler} attempt={state.attempt} />)
            }
            <h1>{showCongrats}</h1>
            <div onClick={checkWord}>
                <HintCard value='Hint' activeHint={activeHint} prepareStateFromWorld={state} />  {showHint}
            </div>
            <div onClick={reset} >
                <button>reset</button>
            </div>
            <li>*Hint สีเขียวจะแสดงคำใบ้</li>
            <li>Hint สีขาวแสดงแค่ให้รีสตรา์ทเมื่อมีการเลือกคำผิด</li>
        </div>

    )
}