import React, { useState } from 'react';

const Home = ({ handleChangeScreen, updateTimers }:{handleChangeScreen:(screen:string)=>void,updateTimers:(excerciseTime:number,sessionTime:number)=>void}) => {
    const [exerciseTime, setExerciseTime] = useState<number>(30);
    const [sessionTime, setSessionTime] = useState<number>(5);

    const handleStart = () => {
        updateTimers(exerciseTime, sessionTime);
        handleChangeScreen('main');
    };

    return (
        <div style={{margin: 0, height: '100vh'}}>
            <h1>Experimento de Dibujo</h1>
            <p>Hola, esta app es una prueba de concepto.</p>
            <h4>Antes de comenzar:</h4>
            <ol>
                <li>Ten a mano lápiz y papel.</li>
                <li>Deja tu computador con sonido.</li>
                <li>Prepárate para dibujar.</li>
            </ol>
            <p>En cuanto hagas click en el botón de "Comenzar", empezará el experimento.</p>
            <p>Tendrás distintas indicaciones, cada una con una duración de 30 segundos, que te dirán cómo dibujar por ese corto periodo.</p>
            <p>Cuando pasen los treinta segundos (puedes configurar ese tiempo), sonará una notificación y cambiará a una nueva indicación.</p>
            <p>La sesión termina luego de 5 minutos (puedes configurar ese tiempo).</p>
            <button onClick={handleStart}>Comenzar</button>
            <div>
                <label htmlFor="exercise-time">Tiempo por ejercicio en segundos:</label>
                <input
                    id="exercise-time"
                    type="number"
                    value={exerciseTime}
                    onChange={e => setExerciseTime(Number(e.target.value))}
                    placeholder="30"
                />
            </div>
            <div>
                <label htmlFor="session-time">Tiempo total de la sesión en minutos:</label>
                <input
                    id="session-time"
                    type="number"
                    value={sessionTime}
                    onChange={e => setSessionTime(Number(e.target.value))}
                    placeholder="5"
                />
            </div>
        </div>
    );
};

export default Home;
