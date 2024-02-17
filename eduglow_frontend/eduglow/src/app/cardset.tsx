import FlashcardArray from "react-quizlet-flashcard";

function Cardset(info){
    var cards = []
    for (var i = 0; i < info.length; i++ ){
        curr_info = 
        {
            id: i,
            frontHTML: <>info['front']</>,
            backHTML: <>info['back']</>
        }
        cards.push(curr_info)
    }
    function saveSet() {
        cards
    }
    return (
        <div>
            <div>
                <FlashcardArray cards={cards}/>
            </div>
            <Button
                title = "save set"
                onPress = {() => saveSet()}
            />
        </div>
    );
}