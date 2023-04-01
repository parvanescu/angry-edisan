import React, { useState } from "react";
import { IonCard, IonContent } from "@ionic/react";
import styled from "styled-components";
import gameSettingsState from "../common/state";
import {useRecoilValue} from "recoil";
import InitialTable from "./components/InitialTable";

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
    const gameSettings = useRecoilValue(gameSettingsState)

    return  <GameTableContainer>
        <GameTableHeader>{messagesList[headerMessage]}</GameTableHeader>
        <InitialTable/>
    </GameTableContainer>
}

export default GameTable;