import React, { useEffect, useState } from "react";
import { IonCard, IonContent } from "@ionic/react";
import styled from "styled-components";
import States from "../common/state";
import {useRecoilValue} from "recoil";
import InitialTable from "./components/InitialTable";
import Table from "./components/Table";

const GameTableContainer = styled(IonContent)`
    --offset-bottom: -3rem!important;
    --offset-top: -2.5rem!important;
    --background: url(/assets/photo/menu.jpg) no-repeat center center fixed;
`

const GameTableHeader = styled(IonCard)`
    --background: url(/assets/photo/wooden-background.jpg);
    width: auto;
    font-size: 1rem;
    color: white;
    text-align: center;
    padding: 5px;
`

const messagesList = ["Dai CAINE!!!", "Nu te tine sa mai dai odata", "Esti pizda daca nu mai dai unu", "Hai odata!!!"]

const GameTable: React.FC = () => {
    const [headerMessage, setHeaderMessage] = useState(Math.floor(Math.random() * 4))
    const [gameOver, setGameOver] = useState(false)
    const gameSettings = useRecoilValue(States.gameSettingsState)
    const gameState = useRecoilValue(States.gameState)

    useEffect(()=>{
        if(gameState.badWasClicked === true) setGameOver(true)
    }, [gameState])

    return  <GameTableContainer>
        <GameTableHeader>{messagesList[headerMessage]}</GameTableHeader>
        <InitialTable/>
        <Table/>
        {gameOver && <div>AI PIERDUT</div> }
    </GameTableContainer>
}

export default GameTable;