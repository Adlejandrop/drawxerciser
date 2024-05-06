import React, { useEffect, useState } from 'react';
import drawCards from '../constants/drawCards';
import Card from '../components/molecules/Card';
import ICard from '../interfaces/card';
import CardClass from '../classes/CardClass';
import useSound from 'use-sound';
import boop from "../assets/sound/Boop-sound-effect.mp3"

const Main = ({ handleChangeScreen, initialExerciseTime, initialSessionTime }: { handleChangeScreen: (screen: string) => void,initialExerciseTime:number,initialSessionTime:number }) => {
    const initialSessionTimeInMinutes = initialSessionTime; // Total session time in minutes
    const initialSessionTimeInSeconds = initialSessionTimeInMinutes * 60; // Convert to seconds

    const [card, setCard] = useState<ICard | null>(null);
    const [exerciseTimer, setExerciseTimer] = useState<number>(initialExerciseTime);
    const [sessionTimer, setSessionTimer] = useState<number>(initialSessionTimeInSeconds);
    const [play] = useSound(boop);
    const [backgroundColor, setBackgroundColor] = useState('#ffb62f');

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const changeCard = () => {
        const availableCards = card ? drawCards.filter(c => c.name !== card.name) : drawCards;
        const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
        const newCard = new CardClass(randomCard);
        setCard(newCard);
        setBackgroundColor('white')
        setBackgroundColor('#ffb62f')
        play()
    };

    useEffect(() => {
        changeCard()
        const sessionInterval = setInterval(() => {
            setSessionTimer(prevTimer => {
                if (prevTimer <= 0) {
                    clearInterval(sessionInterval);
                    handleChangeScreen('home');
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(sessionInterval);
    }, []);

    useEffect(() => {
        const exerciseInterval = setInterval(() => {
            setExerciseTimer(prevTimer => {
                if (prevTimer <= 0) {
                    changeCard();
                    return initialExerciseTime;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(exerciseInterval);
    }, [card]);

    return (
        <div style={{ backgroundColor: backgroundColor, margin: 0, justifyContent:'center', width:'100%', height:'100vh'}}>
            <h2 style={{textAlign:'right', borderWidth:1, borderColor:'black', borderStyle:'solid'}}>Tiempo Restante de la Sesión: {formatTime(sessionTimer)}</h2>
           <div>

            {card && <Card card={card} />}
           </div>
           <div style={{height:'2rem'}}>

            <h2 style={{textAlign:'center', paddingTop:'3rem'}} >Tiempo Ejercicio: {formatTime(exerciseTimer)}</h2>
            <div style={{display:'flex', justifyContent:'center'}}>

            <button style={{margin:'auto'}} onClick={()=>handleChangeScreen('home')}>Volver</button>
            </div>
           </div>
        </div>
    );
};

export default Main;
