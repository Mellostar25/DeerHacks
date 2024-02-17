import { FlashcardArray } from "react-quizlet-flashcard";
import React from "react";

// Define an interface for the info items
interface CardInfo {
    front: string;
    back: string;
}

// Adjust the function signature to use the CardInfo[] type for the info parameter
function Cardset(info: CardInfo[]) {
    const cards = [];
    for (let i = 0; i < info.length; i++) {
        const currInfo = {
            id: i,
            // Use correct expression to reference properties of the current info object
            frontHTML: <>{info[i].front}</>,
            backHTML: <>{info[i].back}</>
        };
        cards.push(currInfo);
    }
    return (
        <div>
            <div>
                <FlashcardArray cards={cards} />
            </div>
        </div>
    );
}

export default Cardset;