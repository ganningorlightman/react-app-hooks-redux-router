import React, { useEffect, useLayoutEffect, useState, useRef, useMemo, useCallback, useContext, useId } from 'react';
import { Link } from "react-router-dom";
import './menu.css';
import ComponentUseCallBack from './ComponentUseCallBack';
import { GameContext } from '../../GameContext';

const complexCompute = number => {
    console.log('complexCompute');
    return number ** 2;
};

const Menu = () => {
    const [showScore, setShowScore] = useState(false);
    const setShowScoreHandler = () => {
        // console.log('setShowScore');
        setShowScore(prevState => !prevState);
        // setTestObjChange(prevState => !prevState);
    };
    const timeoutId = useRef(null);
    const currentRender = useRef(1);
    const divRef = useRef(null);
    const prevScore = useRef(false);
    // console.log('Component render Menu');
    // useLayoutEffect(() => {
    //     // currentRender.current++;
    //     console.log('useLayoutEffect render Menu');
    // });
    useEffect(() => {
        currentRender.current++;
        console.log('useEffect render Menu');
    });
    useEffect(() => {
        prevScore.current = showScore;
    }, [showScore]);
    // console.log(prevScore);
    // console.log(divRef.current?.className)

    // const [number, setNumber] = useState(10);
    // const compute = useMemo(() => complexCompute(number), [number]);
    // useEffect(() => {
    //     setNumber(42);
    //     console.log(compute)
    // }, [showScore]);
    // const testObj = { name: 'Aleksey', age: 26 };
    // const [testObjChange, setTestObjChange] = useState(false);
    // const testObj = useMemo(() => ({ name: 'Aleksey', age: 26 }), [testObjChange]);
    // useEffect(() => {
    //     console.log(testObj)
    // }, [testObj]);

    // const [number, setNumber] = useState(10);
    // const getCompute = useCallback((callbackNumber) => complexCompute(number + callbackNumber), [number]);

    const { state: contextState, setScore: setContextScore } = useContext(GameContext);

    // const uniqueID = useId()
    // console.log(uniqueID)

    return (
        <div className="menu-block">
            {/*<div style={{ color: '#03e9f4' }}>{currentRender.current}</div>*/}
            <Link className="menu-button" to="/game">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Новая игра
            </Link>
            <div ref={divRef} className="menu-button" onClick={setShowScoreHandler}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Счёт
            </div>
            {/*<button onClick={() => setTestObjChange(prevState => !prevState)}>test</button>*/}
            { showScore && <div style={{ color: '#03e9f4' }}>{contextState['Aleksey']}</div>}
            {/*<ComponentUseCallBack getCompute={() => complexCompute(number + 42)} />*/}
            {/*<ComponentUseCallBack getCompute={getCompute} />*/}
            {/*<div className="menu-button" onClick={() => setNumber(prev => prev + 42)}>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    {number}*/}
            {/*</div>*/}
        </div>
    );
};

export default Menu;