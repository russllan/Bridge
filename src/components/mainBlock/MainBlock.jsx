// import React, { useState } from "react";
import { useState } from "react";
import scss from "./MainBlock.module.scss";

function MainBlock() {
  const [isGame, setGame] = useState(false);
  const [isButton, setButton] = useState(true);
  const [FirstCard, setFirstCard] = useState({});
  const [SecondCard, setSecondCard] = useState({});
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  let [balance, setBalance] = useState(1000);
  const [isAgain, setAgain] = useState("");
  let deckId;
  async function Show() {
    const deckUrl =
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const response = await fetch(deckUrl);
    const deckDetails = await response.json();
    console.log(deckDetails);
    deckId = deckDetails.deck_id;
    console.log(deckId);
  }
  Show();

  const startGame = async function () {
    const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
    const response = await fetch(cardUrl);
    const cardDetails = await response.json();
    console.log(cardDetails);
    const card = cardDetails.cards[0];
    const secondCard = cardDetails.cards[1];
    console.log(card);
    setFirstCard(card);
    setSecondCard(secondCard);
    setButton(!isButton);
    console.log(card);
    console.log(secondCard);
  };

  const leftResultOutput = () => {
    setGame(!isGame);
    if (parseInt(FirstCard.value) > parseInt(SecondCard.value)) {
      balance += 100;
      setBalance(balance);
      setWinner("Вы выйграли + 100 очков!");
    } else {
      balance -= 100;
      setBalance(balance);
      setLoser("Вы проиграли - 100 очков!");
    }
    setButton(!isButton);
    setAgain("Сыграйте ещё раз");
  };

  const rightResultOutput = () => {
    setGame(!isGame);
    if (parseInt(FirstCard.value) < parseInt(SecondCard.value)) {
      balance += 100;
      setBalance(balance);
      setWinner("Вы выйграли + 100 очков!");
    } else {
      balance -= 100;
      setBalance(balance);
      setLoser("Вы проиграли - 100 очков!");
    }
    setButton(!isButton);
    setAgain("Сыграйте ещё раз");
  };
  const repeatGame = () => {
    setButton(true);
    setGame(false);
    setLoser("");
    setWinner("");
    setAgain("");
  };

  return (
    <div className={scss.main}>
      <div className={scss.wrapperMain}>
        <p className={scss.balance}>Balance {balance}</p>
        <h1>Испытай удачу</h1>
        <p>Сыграй в игру и испытай удачу</p>
        {winner}
        {loser}
      </div>
      <div className={scss.Cards}>
        <div className={scss.firstCard}>
          {isGame ? (
            <img src={FirstCard.image} alt="FirstCard" />
          ) : (
            <img
              src="https://avatars.mds.yandex.net/i?id=3950246a884d44d0bc9d767dc2bf486f-5345859-images-thumbs&n=13"
              alt="board"
            />
          )}
        </div>
        <div className={scss.middle}>
          {isButton ? (
            <button className={scss.btn} onClick={startGame}>
              Play
            </button>
          ) : (
            <div className={scss.middle}>
              <button className={scss.btn} onClick={leftResultOutput}>
                Left
              </button>
              <button className={scss.btn} onClick={rightResultOutput}>
                Right
              </button>
            </div>
          )}
          <p className={scss.again} onClick={repeatGame}>
            {isAgain}
          </p>
        </div>

        <div className={scss.secondCard}>
          {isGame ? (
            <img src={SecondCard.image} alt="SecondCard" />
          ) : (
            <img
              src="https://avatars.mds.yandex.net/i?id=3950246a884d44d0bc9d767dc2bf486f-5345859-images-thumbs&n=13"
              alt="board"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
