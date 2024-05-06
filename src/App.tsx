import React, { useState } from "react"
import Main from "./screens/Main"
import Home from "./screens/Home"

const AppTSX = ()=>{
    const initialExerciseTime = 30; // Time for each exercise period in seconds
    const initialSessionTimeInMinutes = 5; // Total session time in minutes
    const initialSessionTimeInSeconds = initialSessionTimeInMinutes * 60; // Convert to seconds
    const [screen, setScreen] = useState('home')
    const [exerciseTime, setExerciseTime] = useState<number>(initialExerciseTime);
    const [sessionTime, setSessionTime] = useState<number>(initialSessionTimeInSeconds);
    const handleChangeScreen = (screen:string)=>setScreen(screen)
    const updateTimers = (excerciseTime:number, sessionTime:number)=>{
        setExerciseTime(excerciseTime);
        setSessionTime(sessionTime)
    }
    return(<div>

    {screen==='main' && <Main initialExerciseTime={exerciseTime} initialSessionTime={sessionTime} handleChangeScreen={handleChangeScreen}></Main>}
    {screen==='home' && <Home handleChangeScreen={handleChangeScreen} updateTimers={updateTimers}></Home>}
</div>)
} 

export default AppTSX