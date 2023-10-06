import React from "react";

import "./App.css";
import koreanWords from "../assets/korean-words.json";

const getImageUrl = (word: string) =>
    "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=" +
    word;

type WordElementProps = { word: string };
const WordElement: React.FC<WordElementProps> = ({ word }) => {
    const handleClick = () => {
        const wordImagesUrl = getImageUrl(word);
        window.open(wordImagesUrl, "_blank");
    };
    return <li onClick={handleClick}>{word}</li>;
};

const WordsList: React.FC = () => {
    return (
        <ul>
            {koreanWords.map((word, index) => (
                <WordElement word={word} key={index} />
            ))}
        </ul>
    );
};

const App: React.FC = () => {
    return (
        <>
            <WordsList />
        </>
    );
};

export default App;
