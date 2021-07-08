import React from 'react';
export default function CharacterCard(props) {
    return (
        <div>{props.value}</div>
    )
}
แก้ไขไฟล์ App.js
import CharacterCard from './CharacterCard';
function App() {
    return (
        <div>
            <CharacterCard value="h" />
            <CharacterCard value="i" />
        </div>
    );
}
