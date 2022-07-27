import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { shuffle } from '../../utils';
import { addValueToScore } from './actions';
import './game.css';
import defaultCardsArray from './cardsArray';
import MemoryCard from '../../components/MemoryCard';
import { GameContext } from '../../GameContext';
import { gameReducer, initialState } from './reducer1';
import { addCountAction } from './actions1';

const defaultBoard = {
  lockBoard: false,
  firstCard: null,
}
// const defaultBoard = () => {
//   console.log('Some calculations')
//   return ({
//     lockBoard: false,
//     firstCard: null,
//   })
// }

let timeoutId = null;

const Game = () => {
  const [state, setAllState] = useState(defaultBoard);
  // const [state, setAllState] = useState(defaultBoard());
  // const [state, setAllState] = useState(() => defaultBoard());
  const setState = obj => setAllState(prevState => ({ ...prevState, ...obj }));
  const [cardsArray, setCardsArray] = useState(shuffle(defaultCardsArray));

  useEffect(() => {
    console.log('useEffect ComponentDidMount')
    // const mouseMoveHendler = event => {
    //   console.log({ x: event.clientX, y: event.clientY });
    // }
    // window.addEventListener('mousemove', mouseMoveHendler);
    return () => {
      clearTimeout(timeoutId);
      // window.removeEventListener('mousemove', mouseMoveHendler);
    }
  }, []);

  const dispatch = useDispatch();
  const gameStore = useSelector(state => state.game);
  const { state: contextState, setScore: setContextScore } = useContext(GameContext);
  // console.log('gameStore', gameStore);

  // const [reducer, reducerDispatch] = useReducer(gameReducer, initialState);
  // console.log(reducer)
  // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  //
  // const forceUpdateClick = () => {
  //   forceUpdate();
  // };

  const setDisableCards = (index, disable) => {
    setCardsArray(prevCardsArray => prevCardsArray.map((el, i) =>
      i === index ? ({ ...el, disable }) : el)
    );
  }

  const unFlipCards = (firstCardIndex, secondCardIndex) => {
    setState({ lockBoard: true });
    timeoutId = setTimeout(() => {
      setDisableCards(firstCardIndex, false)
      setDisableCards(secondCardIndex, false)
      setState(defaultBoard);
    }, 1500);
  }

  const saveMatch = () => {
    setState(defaultBoard)
    dispatch(addValueToScore('Aleksey', 1));
    setContextScore('Aleksey', 1);
  }

  const checkForMatch = (firstCardIndex, secondCardIndex) => {
    const firstFramework = cardsArray[firstCardIndex].framework;
    const secondFramework = cardsArray[secondCardIndex].framework;
    const isMatch = firstFramework === secondFramework;
    isMatch ? saveMatch() : unFlipCards(firstCardIndex, secondCardIndex);
  }

  const memoryCardClick = (index) => {
    // reducerDispatch(addCountAction(1));
    if (state.lockBoard) return;
    const card = cardsArray[index];
    if (!state.firstCard) {
      setState({ firstCard: { ...card, index } });
      setDisableCards(index, true)
      return;
    }
    setDisableCards(index, true);
    checkForMatch(state.firstCard.index, index);
  }

  return (
    <section className="memory-game">
      {cardsArray.map((element, index) => (
          <MemoryCard
            key={index + element.framework}
            index={index}
            framework={element.framework}
            frontSrc={element.img}
            disable={element.disable}
            onClick={memoryCardClick}
          />
        )
      )}
      <Link to="/" className="link">В меню</Link>
    </section>
  );
}

export default Game;
