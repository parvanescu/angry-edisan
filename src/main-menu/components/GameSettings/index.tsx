import { IonCard, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import styled from "styled-components";
import CharacterSelection from "./components/CharacterSelection";
import TableSize from "./components/TableSize";

const GameSettingsContainer = styled(IonCard)`
    --background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const GameSettings: React.FC = () => {

    return <GameSettingsContainer>
        <IonGrid style={{padding: "0"}}>
            <IonRow>
                <TableSize/>
            </IonRow>
            <IonRow>
                <CharacterSelection/>
            </IonRow>
        </IonGrid>
    </GameSettingsContainer>
}

export default GameSettings